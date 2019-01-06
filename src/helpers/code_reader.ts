import { FileHelper } from "fortjs";
import { readFile } from "fs";
import { Util } from "../util";

export enum FORT_FILE_TYPE {
    Class = "class",
    Model = "model"
}

export type FortFileInfo = {
    type: FORT_FILE_TYPE,
    className: string,
    classComment: string,
    workerComment?: {
        [workerName: string]: string
    }
}

export class CodeReader {
    srcFolder: string;
    classNames: string[];
    constructor(contentPath: string) {
        this.srcFolder = contentPath;
    }

    async read() {
        const files = await FileHelper.getAllFilesFrom(this.srcFolder);
        if (files.length > 0) {
            return Promise.all(files.map(filePath => {
                return this.readFile(filePath);
            }))
        }
        else {
            throw `No files found in directory - ${this.srcFolder}`;
        }
    }

    private isNullOrEmpty_(value: string) {
        return Util.isNullOrEmpty(value);
    }
    async readFile(path: string) {
        const content = await FileHelper.readFile(path);
        // index of class
        const className = this.getClassName_(content);
        const info = {
            className: className
        } as FortFileInfo;
        if (this.classNames.indexOf(className) >= 0) {
            if (content.search(/@worker/i)) {
                info.type = FORT_FILE_TYPE.Class
            }
            else {
                info.type = FORT_FILE_TYPE.Model
            }
            const classComment = 
            return info;
        }
        return null;
    }

    private getClassName_(contents: string) {
        const classIndex = contents.indexOf('class');
        let className = "";
        let isCharFound = false;
        for (var i = classIndex + 5; i < contents.length; i++) {
            switch (contents[i]) {
                case " ": if (isCharFound === true) {
                    return className;
                } break;
                case "{": return className;
                default: className += contents[i]; isCharFound = true;
            }
        }
        return className;
    }
}