export declare class FileHelper {
    static getAllFilesFrom(src: string): Promise<string[]>;
    static filterFiles(files: string[], extension: string): any[];
    static readFile(src: string): Promise<{}>;
}
