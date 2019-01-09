// import { FileHelper } from "fortjs";
// import { readFile } from "fs";
// import { Util } from "../util";
// import { SwaggerHandler } from "../handlers/swagger_handler";
// import * as Path from "path";
// import * as Fs from "fs-extra";
// import { Global } from "../global";

// export enum FORT_FILE_TYPE {
//     Controller = "controller",
//     Model = "model"
// }

// export type CodeInfo = {
//     type: FORT_FILE_TYPE,
//     className: string,
//     classComment: string,
//     workerComment?: {
//         [workerName: string]: string
//     }
// }

// export class CodeReader {
//     srcFolder: string;
//     classNames: string[];
//     constructor(contentPath: string) {
//         this.srcFolder = contentPath;
//         this.setClasses_();
//     }

//     private setClasses_() {
//         // from routes
//         const routeClasses = SwaggerHandler.controllers.map(val => {
//             return val.className;
//         });

//         // from models

//         const modelClasses = SwaggerHandler.models.map(val => {
//             return val.className;
//         })

//         this.classNames = [...routeClasses, ...modelClasses];
//     }

//     async read() {
//         let files = await FileHelper.getAllFilesFrom(this.srcFolder);
//         console.log("list of files", files);
//         if (files.length > 0) {
//             files = await this.getAllFilesFromFolder(files);
//             return Promise.all(files.map(async filePath => {
//                 return this.readFile(filePath);
//             }))
//         }
//         else {
//             throw `No files found in directory - ${this.srcFolder}`;
//         }
//     }

//     async getAllFilesFromFolder(files: string[]) {
//         let isFolderFound: boolean;
//         const newFiles: string[] = [];
//         await Promise.all(files.map(async (filePath, index) => {
//             filePath = Path.join(this.srcFolder, filePath);
//             const isFolder = await FileHelper.isDirectory(filePath);
//             if (isFolder === true) {
//                 isFolderFound = true;
//                 const filesFromSubDirectory = await FileHelper.getAllFilesFrom(filePath);
//                 newFiles.push(...filesFromSubDirectory.map(val => {
//                     return Path.join(filePath, val);
//                 }));
//             }
//             else {
//                 newFiles.push(filePath);
//             }
//         }));
//         // console.log("files after getting from folders", newFiles);
//         if (isFolderFound === true) {
//             return newFiles;
//         }
//         else {
//             return [];
//         }

//     }

//     private isNullOrEmpty_(value: string) {
//         return Util.isNullOrEmpty(value);
//     }

//     private reverse_(value: string) {
//         return Util.reverse(value);
//     }

//     async readFile(path: string) {
//         console.log("processing file path: ", path);
//         const isFolder = await FileHelper.isDirectory(path);
//         if (isFolder === false) {
//             const content = await Fs.readFile(path, {
//                 encoding: 'utf-8'
//             });
//             const info = this.getCodeInfo(content);
//             return info;
//         }
//         return null;
//     }

//     private getProps_(className: string) {
//         // check from responses
//         var controller = Global.routes.find(qry => qry.controllerName === className);
//         let props: string[];
//         if (controller != null) {
//             props = Object.keys(controller.controller);
//         }
//         else {
//             const model = SwaggerHandler.models.find(qry => qry.className === className);
//             if (model != null) {
//                 props = Object.keys(model.classInstance);
//             }
//         }

//         return props;
//     }

//     private getCodeInfo(contents: string) {
//         let classIndex = contents.lastIndexOf('class');
//         if (classIndex < 0) {
//             return null;
//         }
//         const contentLength = contents.length;
//         const getClassName = () => {
//             let className = "";
//             let isCharFound = false;

//             for (var i = classIndex + 5; i < contentLength; i++) {
//                 switch (contents[i]) {
//                     case " ": if (isCharFound === true) {
//                         return className;
//                     } break;
//                     case "{": return className;
//                     default: className += contents[i]; isCharFound = true;
//                 }
//             }
//             return className;
//         }

//         const getFnName = (commentEndIndex: number) => {
//             const indexOfBracket = contents.indexOf("{", commentEndIndex);
//             let indexOfParanthesis = -1;
//             for (var i = indexOfBracket; indexOfParanthesis <= -1; i--) {
//                 if (contents[i] === "(") {
//                     indexOfParanthesis = i;
//                 }
//             }
//             // const indexOfParanthesis = contents.indexOf("(", commentEndIndex);
//             let methodName = "";
//             let isCharFound = false;
//             for (var i = indexOfParanthesis; i > commentEndIndex; i--) {
//                 switch (contents[i]) {
//                     case " ": if (isCharFound === true) {
//                         return this.reverse_(methodName);
//                     } break;
//                     default: methodName += contents[i]; isCharFound = true;
//                 }
//             }
//             return this.reverse_(methodName);
//         }
//         const className = getClassName();
//         const info = {
//             className: className,
//             workerComment: {}
//         } as CodeInfo;
//         if (this.classNames.indexOf(className) >= 0) {
//             console.log('class name exist', className);
//             let maxattempts = 100;
//             if (contents.search(/@worker/i)) {
//                 info.type = FORT_FILE_TYPE.Controller
//             }
//             else {
//                 info.type = FORT_FILE_TYPE.Model
//             }

//             const props = this.getProps_(className);
//             if (props != null) {
//                 const propIndex = [];
//                 //prop
//             }
//             return null;
//             // let index = 0;
//             // do {
//             //     index = contents.indexOf("/**", index);
//             //     const commentEndIndex = contents.indexOf("*/", index);
//             //     if (index >= 0 && commentEndIndex > index) {
//             //         const comment = contents.substring(index, commentEndIndex);
//             //         if (index < classIndex) { // comment is for class
//             //             info.classComment = comment;
//             //         }
//             //         else { // comment is for worker
//             //             const methodName = getFnName(commentEndIndex);
//             //             if (this.isNullOrEmpty_(methodName) === false) {
//             //                 info.workerComment[methodName] = comment;
//             //             }
//             //         }

//             //     }
//             //     --maxattempts;
//             //     if (index >= 0) {
//             //         index = commentEndIndex;
//             //     }
//             // } while (index >= 0 && index <= contentLength - 1 && maxattempts >= 0)
//             return info;
//         }
//         return null;
//     }
// }