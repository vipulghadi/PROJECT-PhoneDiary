import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const authentication = {
    signupWithEmail: async(email, password) => {
        try {
            const resp = await createUserWithEmailAndPassword(auth, email, password)
            return resp
        } catch (error) {

            return error
        }
    },
    loginWithEmail: async(email, password) => {
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password)
            return resp
        } catch (error) {
            return error
        }


    },
}
export default authentication