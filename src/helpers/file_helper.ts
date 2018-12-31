import * as Fs from "fs";
import * as Path from "path";
export class FileHelper {
    static getAllFilesFrom(src: string): Promise<string[]> {
        return new Promise((res, rej) => {
            Fs.readdir(src, function (err, filenames) {
                if (err) {
                    rej(err)
                }
                else {
                    res(filenames);
                }
            });
        });
    }

    static filterFiles(files: string[], extension: string) {
        const filteredFiles = [];
        files.forEach(file => {
            const parsedinfo = Path.parse(file);
            if (parsedinfo.ext === extension) {
                filteredFiles.push(file);
            }
        });
        return filteredFiles;
    }

    static readFile(src: string) {
        return new Promise((res, rej) => {
            Fs.readFile(src, (err, data) => {
                if (err) {
                    rej(err);
                }
                else {
                    res(data);
                }
            })
        });
    }
}