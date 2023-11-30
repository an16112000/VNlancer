import { db } from "@/helpers/firebase";
import { IConversation, IMessage, ISelectedConversation } from "@/types";
import {
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Unsubscribe,
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

const Inbox = () => {
  const { data: session } = useSession();
  const [dataSource, setDataSource] = useState<IConversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<
    ISelectedConversation | undefined
  >();

  const handleSnapshotConversation = useCallback(
    (querySnapshot: QuerySnapshot<DocumentData>) => {
      const listConversation: IConversation[] = [];

      querySnapshot.docs.forEach((doc) => {
        if (doc.exists()) {
          const id = doc.id;
          const conversation = doc.data() as Omit<IConversation, "id">;

          listConversation.push({ id, ...conversation, doc });
        }
      });

      setDataSource(listConversation);
    },
    []
  );

  useEffect(() => {
    const unsubscribes: Unsubscribe[] = [];

    if (session && session.user) {
      console.log("On listening...");

      const conversationQuery = query(
        collection(db, "conversations"),
        where("members", "array-contains", session.user.email),
        orderBy("updatedAt", "desc")
      );

      const unsubConversation = onSnapshot(
        conversationQuery,
        handleSnapshotConversation
      );

      unsubscribes.push(unsubConversation);
    }

    return () => {
      console.log("Unsubscribe...");

      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [handleSnapshotConversation, session]);

  const handleSelectConversation = useCallback(
    (otherPerson: User, conversation: IConversation) => {
      setSelectedConversation({
        otherPerson,
        conversation,
      });
    },
    []
  );

  return (
    <div>
      <h1>Nhan tin</h1>

      <br />

      <h2>Danh sach tin nhan</h2>

      <ListConversation
        dataSource={dataSource}
        onSelect={handleSelectConversation}
      />

      <br />
      <h3>Cua so chat</h3>

      <InputMessage doc={selectedConversation?.conversation.doc} />

      <br />

      <ChatWindow selectedConversation={selectedConversation} />
    </div>
  );
};

export default Inbox;

const ListConversation = ({
  dataSource,
  onSelect,
}: {
  dataSource: IConversation[];
  onSelect: (otherPerson: User, conversationId: IConversation) => void;
}) => {
  return (
    <>
      {dataSource.map((conversation) => {
        return (
          <ConversationCard
            conversation={conversation}
            key={conversation.id}
            onSelect={(otherPerson) => onSelect(otherPerson, conversation)}
          />
        );
      })}
    </>
  );
};

const ConversationCard = ({
  conversation,
  onSelect,
}: {
  conversation: IConversation;
  onSelect: (otherPerson: User) => void;
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const isActive = useMemo(
    () => router.query.id === conversation.id,
    [conversation.id, router.query.id]
  );

  const otherPersonEmail = useMemo(() => {
    return conversation.members.filter(
      (member) => member !== session?.user.email
    )[0];
  }, [conversation.members, session]);

  useEffect(() => {
    const queryId = router.query.id;

    if (queryId && queryId === conversation.id && otherPersonEmail) {
      onSelect({ email: otherPersonEmail, id: otherPersonEmail });
    }
  }, [otherPersonEmail, conversation.id, router]);

  const handleClick = () => {
    {
      if (router.query && router.query.id !== conversation.id) {
        void router.push({
          query: { id: conversation.id },
        });
      }
    }
  };

  return (
    <div key={conversation.id} style={{ display: "flex", gap: 20 }}>
      <div
        style={{
          color: isActive ? "red" : "black",
        }}
      >
        {otherPersonEmail}
      </div>

      <button onClick={handleClick}>Select</button>
    </div>
  );
};

const ChatWindow = ({
  selectedConversation,
}: {
  selectedConversation?: ISelectedConversation;
}) => {
  const { data: session } = useSession();
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  useEffect(() => {
    let unsubMessage: Unsubscribe;

    if (selectedConversation) {
      const {
        conversation: { doc },
      } = selectedConversation;

      const conversationRef = doc.ref;

      const messageQuery = query(
        collection(conversationRef, "messages"),
        orderBy("createdAt", "asc")
      );

      unsubMessage = onSnapshot(messageQuery, (docs) => {
        const messages: IMessage[] = [];

        docs.forEach((doc) => {
          const data = doc.data() as Omit<IMessage, "id">;

          messages.push({
            id: doc.id,
            ...data,
          });
        });

        setMessageList(messages);
      });
    }

    return () => {
      unsubMessage && unsubMessage();
    };
  }, [selectedConversation]);

  return (
    <>
      {messageList.map(({ sender, message, id }) => (
        <div key={id}>
          {sender} send: "{message}"
        </div>
      ))}
    </>
  );
};

const InputMessage = ({
  doc,
}: {
  doc?: QueryDocumentSnapshot<DocumentData>;
}) => {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (doc && session && session.user) {
      try {
        setMessage("");

        const conversationRef = doc.ref;

        const data = {
          message,
          sender: session.user.email,
          createdAt: serverTimestamp(),
        };

        await addDoc(collection(conversationRef, "messages"), data);

        /**
         * Tạm thời comment vì mỗi khi update list thì các conversation card sẽ bị rerender
         */
        // await updateDoc(conversationRef, {
        //   updatedAt: serverTimestamp(),
        // });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && void handleSend()}
      />

      <button onClick={() => void handleSend()}>Send</button>
    </div>
  );
};

const ButtonContact = ({ otherPersonEmail }: { otherPersonEmail: string }) => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (session && session.user) {
      try {
        setIsLoading(true);

        const conversationQuery = query(
          collection(db, "conversations"),
          where("members", "array-contains-any", [
            session.user.email,
            otherPersonEmail,
          ])
        );

        const docs = await getDocs(conversationQuery);

        let conversationId = "";

        docs.forEach((doc) => {
          if (doc.exists() && !conversationId) {
            const data = JSON.parse(JSON.stringify(doc.data())) as {
              members: string[];
            };

            if (
              data.members.includes(session.user?.email || "") &&
              data.members.includes(otherPersonEmail)
            ) {
              conversationId = doc.id;
            }
          }
        });

        if (!conversationId) {
          const data = await addDoc(collection(db, "conversations"), {
            members: [session.user.email, otherPersonEmail],
            updatedAt: serverTimestamp(),
          });

          conversationId = data.id;
        }

        await router.push({
          pathname: "/inbox",
          query: { id: conversationId },
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return <button onClick={() => void handleClick()}>Lien he</button>;
};
