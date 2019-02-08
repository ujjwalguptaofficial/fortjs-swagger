import { Shield, HttpResult, redirectResult, htmlResult, HTTP_STATUS_CODE, textResult } from "fortjs";
import { UserService } from "../services/user_service";

export class AuthenticationShield extends Shield {
    protect(): Promise<HttpResult> {
        return new Promise((resolve, reject) => {
            const authHeader = this.request.headers['authorization'];
            const onNotAuthenticated = (msg: string) => {
                this.response.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
                resolve(textResult(msg, HTTP_STATUS_CODE.Unauthorized))
            };
            if (authHeader != null) {
                var credCombination = Buffer.from(authHeader.split(" ")[1], 'base64').toString();
                var creds = credCombination.split(":");
                var username = creds[0];
                var password = creds[1];
                const userService = new UserService();
                const user = userService.getUserByEmail(username);
                if (user != null && user.password === password) {
                    resolve(null);
                }
                else {
                    onNotAuthenticated('Invalid credential');
                }
            }
            else {
                onNotAuthenticated('>Need some creds son');
            }


        })
    }
}