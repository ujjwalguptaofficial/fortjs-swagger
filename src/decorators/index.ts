import { body } from "./body";
import { description } from "./description";
import { ignoreProperty } from "./ignore_property";
import { optionalProperty } from "./optional_property";
import { param } from "./param";
import { query } from "./query";
import { response } from "./response";
import { security } from "./security";
import { Summary } from "./summary";
import { Tag } from "./tag";

export const swagger = {
    body: body,
    description: description,
    ignoreProperty: ignoreProperty,
    optionalProperty: optionalProperty,
    param: param,
    query: query,
    response: response,
    security: security,
    summary: Summary,
    tag: Tag
}