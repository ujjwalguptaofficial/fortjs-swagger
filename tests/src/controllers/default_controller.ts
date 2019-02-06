import { Controller, DefaultWorker, Worker, htmlResult, textResult, renderView, viewResult, HTTP_METHOD, Route } from "fortjs";
import { UserService } from "../services/user_service";

export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        try {
            const result = await viewResult('controller:default,action:default');
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }

    @Worker([HTTP_METHOD.Post])
    async login() {
        const emailId = this.body.emailId;
        const pwd = this.body.password;
        if (emailId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUserByEmail(emailId);
            if (user != null && user.password === pwd) {
                this.session.set('userId', user.id);
                this.session.set('emailId', emailId);
                return textResult(`Authenticated`);
            }
            else {
                const result = textResult("Invalid credential");
                return result;
            }
        }
        else {
            const result = textResult("Invalid credential");
            return result;
        }
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/login")
    async getloginForm() {
        const result = viewResult("login_form");
        return result;
    }
}