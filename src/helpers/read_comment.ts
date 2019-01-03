import { FileHelper } from "fortjs";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { __class } from "../constant";
import { WorkerInfo } from "../types/worker_info";
var jsComments = require("js-comments");

export const readComment = async (fileLocation) => {
    try {
        const contents = await FileHelper.readFile(fileLocation);
        const parsedCommentInfo: object[] = jsComments.parse(contents);
        let className;
        let workers: WorkerInfo[] = [];
        const __description = "description";
        parsedCommentInfo.forEach(value => {
            if (value[__description]) {
                className = value[__class];
            }
            else {
                // workers.push({

                // })
            }
        });

    }
    catch (ex) {
        console.error(ex);
    }
}