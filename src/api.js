import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyCW_UzZD4eVgjJVO-5rdpsp-UrZsi7VWRw",
    authDomain: "vanlife-5e39a.firebaseapp.com",
    projectId: "vanlife-5e39a",
    storageBucket: "vanlife-5e39a.appspot.com",
    messagingSenderId: "492653140908",
    appId: "1:492653140908:web:21e070bf8b5f997b783809"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const qry = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(qry)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}