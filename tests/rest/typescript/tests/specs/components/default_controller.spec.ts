import { DefaultController } from "@/controllers/default_controller";
import { viewResult, Fort } from "fortjs";
import { createApp } from "@/index";

describe('DefaultController', () => {
    beforeAll(async () => {
        await createApp() as any;
    });

    it('index', async () => {
        const expectedResult = await viewResult('src/views/default/index.html', {
            title: 'FortJs'
        });
        const indexMethodOutput = await new DefaultController().index('FortJs');
        expect(indexMethodOutput).toEqual(expectedResult);
    });

    afterAll(() => {
        return Fort.destroy();
    });
});