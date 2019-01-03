// import { FileHelper } from "../helpers/file_helper";
// import { SwaggerOption } from "../models";
// import webpack from 'webpack';
// // import { webpackConfig } from "../swagger_ui/webpack.config";


// export class SwaggerUiHandler {
//     async  handle(option: SwaggerOption, config: any) {
//         //console.log("formmated data", JSON.stringify(formmatedData));
//         const isPathExist = await FileHelper.isPathExist(option.contentsPath);
//         if (isPathExist === false) {
//             await FileHelper.createDir(option.contentsPath);
//         }
//         const swaggerConfigPath = `${option.contentsPath}/swagger.json`;
//         // await writeFile(swaggerConfigPath, JSON.stringify(formmatedData), { flag: 'w' });
//         await FileHelper.writeFile(swaggerConfigPath, JSON.stringify(config));
//         // const swaggerUiPath = getAbsoluteFSPath();
//         // console.log(swaggerUiPath);
//         // await copy(swaggerUiPath, option.contentsPath, {
//         //     overwrite: true
//         // })
//     }

//     // createBundle() {
//     //     return new Promise((res, rej) => {
//     //         webpack(webpackConfig, (err, stats) => {
//     //             if (err) {
//     //                 rej(err);
//     //             }
//     //             else if (stats.hasErrors()) {
//     //                 rej(stats.hasErrors());
//     //             }
//     //             else {
//     //                 // Done processing
//     //             }

//     //         });
//     //     })
//     // }

// }