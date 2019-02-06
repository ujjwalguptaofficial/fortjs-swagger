import { Shield, HttpResult, redirectResult } from "fortjs";

export class AuthenticationShield extends Shield {
    protect(): Promise<HttpResult> {
        return new Promise((resolve, reject) => {
            const authHeader = this.request.headers['authorization'];
            console.log('authHeader', authHeader);
            resolve(null);
            // this.session.isExist('userId').then(exist => {
            //     if (exist) {
            //         resolve(null);
            //     }
            //     else {
            //         resolve(redirectResult("/default/login"))
            //     }
            // })
        })
    }
}