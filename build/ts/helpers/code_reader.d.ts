export declare enum FORT_FILE_TYPE {
    Controller = "controller",
    Model = "model"
}
export declare type CodeInfo = {
    type: FORT_FILE_TYPE;
    className: string;
    classComment: string;
    workerComment?: {
        [workerName: string]: string;
    };
};
export declare class CodeReader {
    srcFolder: string;
    classNames: string[];
    constructor(contentPath: string);
    private setClasses_;
    read(): Promise<CodeInfo[]>;
    getAllFilesFromFolder(files: string[]): Promise<string[]>;
    private isNullOrEmpty_;
    private reverse_;
    readFile(path: string): Promise<CodeInfo>;
    private getCodeInfo;
}
