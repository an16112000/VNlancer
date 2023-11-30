import { initializeApp, type FirebaseOptions } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const config: FirebaseOptions = {
    apiKey: "AIzaSyA-eZtYgjAPAWAtYdEx37Pta49j1DEAu8Q",
    authDomain: "an-pho-ma.firebaseapp.com",
    projectId: "an-pho-ma",
    storageBucket: "an-pho-ma.appspot.com",
    messagingSenderId: "34141556993",
    appId: "1:34141556993:web:8ff37a6697f2dce4b70b00",
    measurementId: "G-S935TGWWKT"
}

const app = initializeApp(config)

export const storage = getStorage(app)
export const db = getFirestore(app)