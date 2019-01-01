import { Length, Contains, IsIn, IsEmail } from "class-validator";
import { IgnoreProperty } from "@fortjs/swagger";

// @SwaggerModel
export class User {
    id?: number = 0;

    @Length(5)
    password?: string = "";

    @Length(5)
    name: string = "";

    @IsIn(["male", "female"])
    gender: string = "";

    @Length(10, 100)
    address: string = ""

    @IsEmail()
    emailId: string = ""
    // constructor(user: any) {
    //     this.id = Number(user.id);
    //     this.name = user.name;
    //     this.gender = user.gender;
    //     this.address = user.address;
    //     this.emailId = user.emailId;
    //     this.password = user.password;
    // }

    @IgnoreProperty
    init?(user: any) {
        this.id = Number(user.id);
        this.name = user.name;
        this.gender = user.gender;
        this.address = user.address;
        this.emailId = user.emailId;
        this.password = user.password;
    }
}