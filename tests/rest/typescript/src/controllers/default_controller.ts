import { Controller, defaultWorker, textResult, viewResult, worker, assign, HTTP_STATUS_CODE, HTTP_METHOD } from "fortjs";
import { swagger } from "fortjs-swagger";
import { Student } from "../models/student";

@swagger.security('')
export class DefaultController extends Controller {

    @defaultWorker()
    async index(@assign('FortJs') title: string) {
        try {
            const data = {
                title: title
            };
            const result = await viewResult('src/views/default/index.html', data);
            return result;
        } catch (ex) {
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult("Our server is busy right now. Please try later.");
            return result;
        }
    }

    @worker(HTTP_METHOD.Post)
    @swagger.body({ id: "", name: "" })
    @swagger.response(200, { message: "", status: "", data: {} })
    async AnonymousBody() {

    }

    @worker(HTTP_METHOD.Post)
    @swagger.body(Student)
    @swagger.response(200, 'works ok')
    async ModelBody() {

    }

}