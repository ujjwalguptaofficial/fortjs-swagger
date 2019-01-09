import { Length, Contains, IsIn, IsEmail } from "class-validator";
import { IgnoreProperty, SwaggerModel } from "@fortjs/swagger";
import { IUser } from "../interfaces/user";


export class User implements IUser, SwaggerModel {
    
    /**
     * user id
     *
     * @type {number}
     * @memberof User
     */
    id?: number;

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


    @IgnoreProperty
    init?(user: any) {
        this.id = Number(user.id);
        this.name = user.name;
        this.gender = user.gender;
        this.address = user.address;
        this.emailId = user.emailId;
        this.password = user.password;
    }

    getExample() {
        this.id = 0;
        this.address = "sector 134 noida, u.p. India";
        this.emailId = "abc@gmail.com";
        this.gender = "male";
        this.name = "ujjwal";
        this.password = "asdfghj";
    }
}