import { Shield, redirectResult, htmlResult, HTTP_STATUS_CODE, textResult } from "fortjs";
import { UserService } from "../services/user_service";

export class AuthenticationShield extends Shield {
    async protect() {
        const authHeader = this.request.headers['authorization'];
        const onNotAuthenticated = (msg: string) => {
            this.response.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
            return textResult(msg, HTTP_STATUS_CODE.Unauthorized);
        };
        if (authHeader != null) {
            const credCombination = Buffer.from(authHeader.split(" ")[1], 'base64').toString();
            const creds = credCombination.split(":");
            const username = creds[0];
            const password = creds[1];
            const userService = new UserService();
            const user = userService.getUserByEmail(username);
            if (user != null && user.password === password) {
                return null;
            }
            else {
                return onNotAuthenticated('Invalid credential');
            }
        }
        else {
            return onNotAuthenticated('Need some credentials');
        }
    }
}