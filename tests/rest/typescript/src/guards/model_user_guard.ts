import { Guard, HTTP_STATUS_CODE, textResult } from "fortjs";
import { User } from "../models/user";
import validator from "validator";

export class ModelUserGuard extends Guard {

    validate(user) {
        let errMessage;
        if (user.name == null || !validator.isLength(user.name, {
            min: 5
        })) {
            errMessage = "name should be minimum 5 characters";
        } else if (user.password == null || !validator.isLength(user.password, {
            min: 5
        })) {
            errMessage = "password should be minimum 5 characters";
        } else if (user.gender == null || !validator.isIn(user.gender, ["male", "female"])) {
            errMessage = "gender should be either male or female";
        } else if (user.gender == null || !validator.isEmail(user.emailId)) {
            errMessage = "email not valid";
        } else if (user.address == null || !validator.isLength(user.address, {
            min: 10, max: 100
        })) {
            errMessage = "address length should be between 10 & 100";
        }
        return errMessage;
    }

    async check() {
        const user = new User().init(this.body);
        const errMsg = this.validate(user);
        if (errMsg == null) {
            // pass user to worker method, so that they dont need to parse again
            this.data.user = user;
        } else {
            return textResult(errMsg, HTTP_STATUS_CODE.BadRequest);
        }
    }
}