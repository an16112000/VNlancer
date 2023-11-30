import { DocumentData, QueryDocumentSnapshot, Timestamp } from "firebase/firestore"
import { User } from "next-auth"

export interface IConversation {
    id: string
    members: string[]
    updatedAt: Timestamp
    doc: QueryDocumentSnapshot<DocumentData>
}

export interface ISelectedConversation {
    otherPerson: User
    conversation: IConversation
}

export interface IMessage {
    id: string
    message: string
    sender: string
    createdAt: Timestamp
}