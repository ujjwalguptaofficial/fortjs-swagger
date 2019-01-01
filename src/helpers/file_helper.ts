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

    static isPathExist(path: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                Fs.exists(path, (isExist) => {
                    resolve(isExist);
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    static isDirectory(path: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                Fs.lstat(path, (err, status) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(status.isDirectory());
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    static createDir(path: string) {
        return new Promise((resolve, reject) => {
            try {
                Fs.mkdir(path, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }

        })
    }

    static writeFile(path: string, contents: string) {
        return new Promise((resolve, reject) => {
            try {
                Fs.writeFile(path, contents, { flag: 'w' }, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }

        })
    }

}