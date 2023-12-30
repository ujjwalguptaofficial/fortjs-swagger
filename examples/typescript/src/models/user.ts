import { swagger, SwaggerModel } from "fortjs-swagger";
import { IsEmail, IsIn, IsNumber, IsOptional, Length, } from "class-validator";

export class User implements SwaggerModel {

    @swagger.optionalProperty
    @IsNumber()
    @IsOptional()
    id?: number;

    @swagger.ignoreProperty
    somePropertyIDontWantInSwagger?: any;

    @Length(5)
    password?: string;

    @Length(5)
    name: string;

    @IsIn(["male", "female"])
    gender: string;

    @Length(10, 100)
    address: string;

    @IsEmail()
    emailId: string;

    constructor(user: any) {
        if (user) {
            if (user.id) {
                this.id = Number(user.id);
            }
            this.name = user.name;
            this.gender = user.gender;
            this.address = user.address;
            this.emailId = user.emailId;
            this.password = user.password;
        }
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