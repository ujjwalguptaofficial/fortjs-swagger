import { Controller, DefaultWorker, HTTP_STATUS_CODE, viewResult, Assign, MIME_TYPE } from "fortjs";
import { Summary, Response } from "fortjs-swagger";

export class DefaultController extends Controller {

    @DefaultWorker()
    @Summary('Home Page')
    @Response(HTTP_STATUS_CODE.Ok, "", MIME_TYPE.Html)
    async index(@Assign('FortJs') title) {

        const data = {
            title: title
        };
        const result = await viewResult('default/index.html', data);
        return result;

    }
}