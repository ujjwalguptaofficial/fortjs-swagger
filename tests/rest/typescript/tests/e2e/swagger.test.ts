import axios from "axios";
import { swaggerJson } from "./swagger";
import { readFileSync } from "fs";
import { join } from "path";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000
});

describe('/swagger', () => {

    it('swagger test', async () => {
        const data = readFileSync(join(__dirname, '../../dist/swagger/swagger.json'), { encoding: 'utf-8' });
        expect(swaggerJson).toEqual(JSON.parse(`${data}`));
    });
});

