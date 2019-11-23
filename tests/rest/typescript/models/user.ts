import { IgnoreProperty, SwaggerModel, OptionalProperty } from "fortjs-swagger";

export class Friend implements SwaggerModel {
    @OptionalProperty
    id?: number;

    @IgnoreProperty
    somePropertyIDontWantInSwagger?: any;


    name: string;


    getExample?() {
        this.id = 0;
        this.name = "ujjwal";
    }
}

export class User implements SwaggerModel {


    @OptionalProperty
    id?: number;

    password?: string;

    name: string;

    gender: string;

    address: string;

    emailId: string;

    friends?: Friend[] = [];

    wishList? = ["india", "america", "london"];

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
        const friend = new Friend();
        friend.id = 1;
        friend.name = "john";
        this.friends = [friend];
    }
}