import { SwaggerHandler } from "../handlers/swagger_handler";

export const Tag = (name: string, description: string): ClassDecorator => {
    return (target: any) => {
        const className: string = target.name;
        SwaggerHandler.saveTag(className, name, description);
    };
}