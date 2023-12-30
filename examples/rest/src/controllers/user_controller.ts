import { Controller, textResult, jsonResult, HTTP_STATUS_CODE, validate, shields, http, singleton } from 'fortjs';
import { UserService } from '@/services/user_service';
import { User } from '@/models/user';
import { swagger } from 'fortjs-swagger';
import { AuthenticationShield } from '@/shields/authentication_shield';

@shields(AuthenticationShield)
@swagger.security('basicAuth')
export class UserController extends Controller {

    service: UserService;

    constructor(@singleton(UserService) userService: UserService) {
        super();
        this.service = userService;
    }


    @swagger.summary('get all users')
    @swagger.description('return all saved users')
    @swagger.response(HTTP_STATUS_CODE.Ok, [User])
    @swagger.query("offset", 1, "offset")
    @swagger.query("limit", 10, "no of records in the response")
    @http.get("/")
    async getUsers() {
        const { offset, limit } = this.query;
        return jsonResult(this.service.getUsers());
    }


    @swagger.summary('Add user')
    @swagger.response(HTTP_STATUS_CODE.Created, User)
    @swagger.body(User, "User model")
    @http.post("/")
    @validate.body(User)
    async addUser() {
        const user = this.body as User;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @swagger.summary('Update user')
    @swagger.response(HTTP_STATUS_CODE.Ok, User)
    @swagger.response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @validate.body(User)
    @http.put("/")
    async updateUser() {
        const user: User = this.body as User;
        const userUpdated = this.service.updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        }
        else {
            return textResult("invalid user", HTTP_STATUS_CODE.NotFound);
        }

    }

    @swagger.summary('get a single user by id')
    @swagger.response(HTTP_STATUS_CODE.Ok, User)
    @swagger.response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @swagger.param('id', 1, 'user id')
    @http.get("/{id}")
    async getUser() {
        const userId = Number(this.param.id);
        const user = this.service.getUser(userId);
        if (user == null) {
            return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);
        }
        return jsonResult(user);

    }

    @swagger.summary('remove a single user by id')
    @swagger.response(HTTP_STATUS_CODE.Ok, 'user deleted')
    @swagger.response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @http.delete("/{id}")
    async removeUser() {

        const userId = Number(this.param.id);
        const user = this.service.getUser(userId);
        if (user != null) {
            this.service.removeUser(userId);
            return textResult("user deleted");
        }
        else {
            return textResult("invalid user", HTTP_STATUS_CODE.NotFound);
        }
    }
}