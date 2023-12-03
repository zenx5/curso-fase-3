import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export function login(email:string, password:string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user', user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log( errorCode, errorMessage)
        });
}
