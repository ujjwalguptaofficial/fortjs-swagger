import { IgnoreProperty, SwaggerModel, OptionalProperty } from "fortjs-swagger";

export class User implements SwaggerModel {


    @OptionalProperty
    id?: number;

    password?: string;

    name: string;

    gender: string;

    address: string;

    emailId: string;

    @IgnoreProperty
    init?(user) {
        this.id = Number(user.id);
        this.name = user.name;
        this.gender = user.gender;
        this.address = user.address;
        this.emailId = user.emailId;
        this.password = user.password;
        return this;
    }

    getExample?() {
        this.id = 0;
        this.address = "sector 134 noida, u.p. India";
        this.emailId = "abc@gmail.com";
        this.gender = "male";
        this.name = "ujjwal";
        this.password = "asdfghj";
    }
}