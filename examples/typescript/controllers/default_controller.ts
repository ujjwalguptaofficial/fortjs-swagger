import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign, HTTP_STATUS_CODE, MIME_TYPE } from "fortjs";
import { Summary, Response } from "fortjs-swagger";

export class DefaultController extends Controller {

    @DefaultWorker()
    @Summary('Home Page')
    @Response(HTTP_STATUS_CODE.Ok, "", MIME_TYPE.Html)
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
}