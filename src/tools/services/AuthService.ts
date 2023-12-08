import { login, register } from "../firebase/auth";

export default class AuthService {

    static async login(email:string, password:string) {
        try{
            if( email && password ) {
                const response = await login(email, password)
                return {
                    data: response,
                    error: false,
                    message: "Success"
                }
            }
            throw new Error("Email or Password empty")
        } catch( error:any ) {
            return {
                data: null,
                error: false,
                message: error.message
            }
        }
    }

    static async register( email:string, password:string, passwordConfirmed:string) {
        try{
            if( email && password ) {
                if( password===passwordConfirmed ) {
                    const data = register(email, password)
                    return {
                        data,
                        error: false,
                        message: "Success"
                    }
                }
                throw new Error("Password error")
            }
            throw new Error("Email or Password empty")
        } catch( error:any ) {
            return {
                data: null,
                error: false,
                message: error.message
            }
        }
    }
}