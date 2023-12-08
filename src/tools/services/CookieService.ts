import { cookies } from "next/headers"

export default class CookieService {

    private static setUser(user:any) {
        const expires = user.expirationDate ? user.expirationDate : Date.now() + 24 * 60 * 60 * 1000;
        cookies().set(process.env.COOKIES_NAME_USER as string, JSON.stringify({
            ...user,
            expirationDate: expires
        }), {
            expires: expires
        });
    }

    private static getUser() {
        const user = cookies().get(process.env.COOKIES_NAME_USER as string)
        return user?.value ? JSON.parse(user.value) : false;
    }

    private static async delete(cookieName:string){
        await cookies().delete(cookieName)
    }

    static user() {
        return {
            set: (data:any)=>this.setUser(data),
            get: ()=>this.getUser(),
            isAuth: ()=>!!this.getUser(),
            logout: async () => await this.delete(process.env.COOKIES_NAME_USER as string)
        };
    }

}