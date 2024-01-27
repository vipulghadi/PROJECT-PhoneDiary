import { getFirestore, where } from "firebase/firestore";
import { collection, addDoc, serverTimestamp, getDocs, doc, deleteDoc, updateDoc, query, getDoc } from 'firebase/firestore'
import { app, db } from "../firebase/config";
const contactRef = collection(db, "contact")
const userRef = collection(db, "user")

export const contactCollection = {
    getAllContact: async(authId) => {
        try {


            const q = query(contactRef, where("authId", "==", authId))
            const resp = await getDocs(q)
            return resp
        } catch (error) { return error }
    },
    addContact: async(name, phone, address, isClose, isSecret, authId) => {
        try {
            const resp = await addDoc(contactRef, {
                name,
                phone,
                address,
                isClose,
                isSecret,
                authId
            })
            return resp
        } catch (error) {
            return error
        }
    },
    updateContact: async(id, data) => {
        try {
            const docRef = doc(db, "contact", id);
            const resp = await updateDoc(docRef, data)
            return resp
        } catch (error) {
            return error
        }
    },
    deleteContact: async(id) => {
        try {
            const docRef = doc(db, "contact", id);
            const resp = await deleteDoc(docRef)
            return resp

        } catch (error) {
            return error
        }

    }
}

export const userCollection = {
    createUser: async(name, email, phone, authId, address) => {
        try {
            const resp = await addDoc(userRef, {
                name,
                email,
                phone,
                authId,
                address
            })
            return resp
        } catch (error) {
            return error
        }

    },
    getUserInfo: async(userId) => {
        try {
            const q = query(userRef, where("authId", "==", userId))
            const resp = await getDocs(q)
            return resp
        } catch (error) { return error }

    },
    updateUserInfo: async(id, data) => {
        try {
            const docRef = doc(db, "user", id);
            const resp = await updateDoc(docRef, {
                name: data.name,
                phone: data.phone,
                address: data.address
            })
            return resp
        } catch (error) {
            return error
        }
    },
}

async function searchBar(query) {
    try {
        const q = query(contactRef, where("authId", "==", authId))
        const resp = await getDocs(q)
        return resp
    } catch (error) { return error }
}