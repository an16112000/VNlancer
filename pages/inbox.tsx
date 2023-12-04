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
import { PageLayout } from "@/layout/PageLayout";
import { PageLayoutWithOutLeftNavi } from "@/layout/PageLayoutWithOutLeftNavi";
import { Box, Stack, TextField } from "@mui/material";
import Image from "next/image";

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

  console.log(selectedConversation);

  return (
    <PageLayoutWithOutLeftNavi>
      <Stack
        flexDirection={"row"}
        sx={{ borderRadius: "8px", backgroundColor: "#fff" }}
      >
        <Stack
          flex={1}
          alignItems={"center"}
          padding={"10px 10px"}
          gap={"20px"}
        >
          <input
            placeholder="Search messages"
            style={{
              border: "1px solid #ccc",
              padding: "8px 4px",
              borderRadius: "6px",
              width: "100%",
            }}
          />
          <Stack alignItems={"flex-start"} width={"100%"}>
            <ListConversation
              dataSource={dataSource}
              onSelect={handleSelectConversation}
            />
          </Stack>
        </Stack>
        <Box flex={3} sx={{
          borderLeft: '1px solid #ccc'
        }}>
          <ChatWindow
            selectedConversation={selectedConversation}
            dataSource={dataSource}
          />
          <InputMessage doc={selectedConversation?.conversation.doc} />
        </Box>
      </Stack>
    </PageLayoutWithOutLeftNavi>
    // <div>
    //   <h1>Nhan tin</h1>

    //   <br />

    //   <h2>Danh sach tin nhan</h2>

    //   <ListConversation
    //     dataSource={dataSource}
    //     onSelect={handleSelectConversation}
    //   />

    //   <br />
    //   <h3>Cua so chat</h3>

    //   <InputMessage doc={selectedConversation?.conversation.doc} />

    //   <br />

    //   <ChatWindow selectedConversation={selectedConversation} />
    // </div>
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
  console.log(dataSource);
  return (
    <Stack gap={"15px"} width={"100%"}>
      {dataSource.map((conversation) => {
        return (
          <>
            <ConversationCard
              conversation={conversation}
              key={conversation.id}
              onSelect={(otherPerson) => onSelect(otherPerson, conversation)}
            />
            <Box
              sx={{ width: "100%", height: "1px", border: "0.5px solid #ccc" }}
            ></Box>
          </>
        );
      })}
    </Stack>
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
        <Stack
          flexDirection={"row"}
          gap={"10px"}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        >
          <Image
            unoptimized
            src={session?.user.image || ""}
            alt={""}
            height={100}
            width={100}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
          <Stack>
            {loaiBoPhanDuoiEmail(otherPersonEmail)}
            <p>Abc</p>
          </Stack>
        </Stack>
      </div>

      {/* <button onClick={handleClick}>Select</button> */}
    </div>
  );
};

const ChatWindow = ({
  selectedConversation,
  dataSource,
}: {
  selectedConversation?: ISelectedConversation;
  dataSource: IConversation[];
}) => {
  const { data: session } = useSession();
  const [messageList, setMessageList] = useState<IMessage[]>([]);
  const otherPersonEmail = selectedConversation?.otherPerson.email;
  console.log(otherPersonEmail);

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
    <Box sx={{ height: "80vh" }} flex={5}>
      <Box
        padding={"15px 15px"}
        sx={{ borderBottom: "1px solid #ccc" }}
        flex={1}
      >
        <Stack flexDirection={"row"} gap={"10px"} sx={{ cursor: "pointer" }}>
          <Image
            unoptimized
            src={session?.user.image || ""}
            alt={""}
            height={100}
            width={100}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
          <Stack>{loaiBoPhanDuoiEmail(otherPersonEmail || "")}</Stack>
        </Stack>
      </Box>
      <Stack flex={1} maxHeight={"calc(80vh - 81px)"} overflow={'scroll'}>
        <Stack gap={"8px"} alignItems={"center"} padding={"10px 10px"}>
          <Image
            unoptimized
            src={session?.user.image || ""}
            alt={""}
            height={100}
            width={100}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
          <Box sx={{ fontWeight: "500" }}>
            {loaiBoPhanDuoiEmail(otherPersonEmail || "")}
          </Box>
          <Box>
            This is very biginning of your direct message with{" "}
            {loaiBoPhanDuoiEmail(otherPersonEmail || "")}
          </Box>
          <Box
            sx={{
              height: "1px",
              width: "90%",
              borderBottom: "1px solid #ccc",
              margin: "25px 0",
            }}
          ></Box>
        </Stack>
        <Stack gap={"15px"} padding={'5px 15px'}>
          {messageList.map(({ sender, message, id }) => (
            <Stack
              gap={"8px"}
              flexDirection={"row"}
              sx={
                sender == otherPersonEmail
                  ? { justifyContent: "flex-start" }
                  : { justifyContent: "flex-end" }
              }
              key={id}
            >
              {sender == otherPersonEmail ? (
                <Stack flexDirection={"row"} alignItems={"center"} gap={"8px"}>
                  <Image
                    unoptimized
                    src={session?.user.image || ""}
                    alt={""}
                    height={100}
                    width={100}
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  {message}
                </Stack>
              ) : (
                <Stack flexDirection={"row"} alignItems={"center"} gap={"8px"}>
                  {message}
                  <Image
                    unoptimized
                    src={session?.user.image || ""}
                    alt={""}
                    height={100}
                    width={100}
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Stack>
              )}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
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
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        height: "45px",
        padding: "0 20px",
      }}
      flex={1}
    >
      <input
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && void handleSend()}
      />

      <button onClick={() => void handleSend()}>
        <i className="fa-regular fa-paper-plane"></i>
      </button>
    </Box>
  );
};

export const ButtonContact = ({
  otherPersonEmail,
}: {
  otherPersonEmail: string;
}) => {
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

  return (
    <button
      style={{
        backgroundColor: "#3563c3",
        color: '#fff',
        padding: '6px 10px',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
      onClick={() => void handleClick()}
    >
      Contact
    </button>
  );
  5;
};

function loaiBoPhanDuoiEmail(email: string) {
  var viTriCong = email.indexOf("@");
  if (viTriCong !== -1) {
    var emailMoi = email.substring(0, viTriCong);
    return emailMoi;
  }
  return email;
}
