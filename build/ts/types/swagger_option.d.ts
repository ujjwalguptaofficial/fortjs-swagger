import { ApplicationInfo } from "./application_info";
import { ServerInfo } from "./server_info";
export type SwaggerOption = {
    appInfo: ApplicationInfo;
    servers: ServerInfo[];
    outputPath: string;
    securitySchemes?: {
        basicAuth?: {
            type: "http";
            scheme: "basic";
        };
        bearerAuth?: {
            type: "http";
            scheme: "bearer";
        };
        apiKeyAuth?: {
            type: "apiKey";
            in: string;
            name: string;
        };
        openID?: {
            type: "openIdConnect";
            openIdConnectUrl: string;
        };
        oAuth2?: {
            type: "oauth2";
            flows: {
                authorizationCode: {
                    authorizationUrl: string;
                    tokenUrl: string;
                    scopes: {
                        read: string;
                        write: string;
                        admin: string;
                    };
                };
            };
        };
    } | any;
};
