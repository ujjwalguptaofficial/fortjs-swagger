import axios from "axios";
import { createApp } from "..";
import { Fort } from "fortjs";
import { swaggerJson } from "./swagger";
import { readFileSync } from "fs";
import { join } from "path";
const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000
});

describe('/swagger', () => {

    let app: Fort;
    beforeAll(async () => {
        app = await createApp() as any;
    });

    it('swagger test', async () => {
        const data = readFileSync(join(__dirname, '../swagger/swagger.json'), { encoding: 'utf-8' });
        expect(swaggerJson).toEqual(JSON.parse(`${data}`));
    });

    afterAll(() => {
        return Fort.destroy();
    });

});

