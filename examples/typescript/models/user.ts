import { IgnoreProperty, SwaggerModel, OptionalProperty } from "fortjs-swagger";

export class User implements SwaggerModel {


    @OptionalProperty
    id?: number;

    @IgnoreProperty
    somePropertyIDontWantInSwagger?: any;

    password?: string;

    name: string;

    gender: string;

    address: string;

    emailId: string;

    getExample?() {
        this.id = 0;
        this.address = "sector 134 noida, u.p. India";
        this.emailId = "abc@gmail.com";
        this.gender = "male";
        this.name = "ujjwal";
        this.password = "asdfghj";
    }
}