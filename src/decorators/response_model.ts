import { SwaggerHandler } from "../handlers/swagger_handler";

// export const responseModel = (): ClassDecorator => {
//     return (target: any) => {
//         const className = target.name;
//         SwaggerHandler.saveModel({
//             classInstance: new target(),
//             className: className,
//             ignoredProperty: []
//         })
//     }
// }

export const responseModel = (target: any) => {
    const className = target.name;
    SwaggerHandler.saveModel({
        classInstance: new target(),
        className: className,
        ignoredProperty: []
    })
}