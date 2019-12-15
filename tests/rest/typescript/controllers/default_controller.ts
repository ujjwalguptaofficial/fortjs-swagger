import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign, HTTP_STATUS_CODE, Route, HTTP_METHOD } from "fortjs";
import { Summary, Response, Security, Body } from "fortjs-swagger";
import { Student } from "../models/student";

@Security('')
export class DefaultController extends Controller {

    @DefaultWorker()
    async index(@Assign('FortJs') title: string) {
        try {
            const data = {
                title: title
            };
            const result = await viewResult('default/index.html', data);
            return result;
        } catch (ex) {
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult("Our server is busy right now. Please try later.");
            return result;
        }
    }

    @Worker([HTTP_METHOD.Post])
    @Body({ id: "", name: "" })
    @Response(200, { message: "", status: "", data: {} })
    async AnonymousBody() {

    }

    @Worker([HTTP_METHOD.Post])
    @Body(Student)
    @Response(200, 'works ok')
    async ModelBody() {

    }

}