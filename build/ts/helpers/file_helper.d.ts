export declare class FileHelper {
    static getAllFilesFrom(src: string): Promise<string[]>;
    static filterFiles(files: string[], extension: string): any[];
    static readFile(src: string): Promise<{}>;
    static isPathExist(path: string): Promise<boolean>;
    static isDirectory(path: string): Promise<boolean>;
    static createDir(path: string): Promise<{}>;
    static writeFile(path: string, contents: string): Promise<{}>;
}
