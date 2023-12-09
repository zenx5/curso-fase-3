import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function login(email:string, password:string) {
    return await signInWithEmailAndPassword(auth, email, password)
}

export async function register(email:string, password:string) {
    return await createUserWithEmailAndPassword(auth, email, password)
}

export async function logout(){
    await auth.signOut()
}