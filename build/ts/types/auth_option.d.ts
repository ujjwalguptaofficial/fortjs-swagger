import { AUTH_TYPE } from "../enums/auth_type";
import { AUTH_SCHEME } from "../enums/auth_scheme";
export declare type AuthOption = {
    type: AUTH_TYPE;
    scheme?: AUTH_SCHEME;
    in?: string;
    name?: string;
    openIdConnectUrl?: string;
    flows?: any;
};
