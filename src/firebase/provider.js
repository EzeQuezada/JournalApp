import { GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config.JS";
import { signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const singaInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials =  GoogleAuthProvider.credentialFromResult( result );
        const user = result.user;
        console.log({ user })
    } catch (error) {
        console.log(error)
    }
}