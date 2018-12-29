

export type WorkerInfo = {
    methodName: string;
    response: { [statusCode: number]: any };
    query: { [variableName: string]: any };
    body: { [variableName: string]: any };
    file: { [variableName: string]: any };
}