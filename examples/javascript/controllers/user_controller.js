import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards, Singleton } from 'fortjs';
import { UserService } from '../services/user_service';
import { ModelUserGuard } from '../guards/model_user_guard';
import { Summary, Description, Response, Body, Param } from "fortjs-swagger";
import { User } from "../models/user";

export class UserController extends Controller {

    constructor(@Singleton(UserService) service) {
        super();
        this.service = service;
    }

    @Summary('get all users')
    @Description('return all saved users')
    @DefaultWorker()
    @Response(HTTP_STATUS_CODE.Ok, [User])
    async getUsers() {
        return jsonResult(this.service.getUsers());
    }

    @Summary('Add user')
    @Worker(HTTP_METHOD.Post)
    @Route("/")
    @Guards(ModelUserGuard)
    @Response(HTTP_STATUS_CODE.Created, User)
    @Body(User, "User model")
    async addUser() {
        const user = this.data.user;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Summary('Update user')
    @Response(HTTP_STATUS_CODE.Ok, User)
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @Worker(HTTP_METHOD.Put)
    @Guards(ModelUserGuard)
    @Route("/")
    async updateUser() {

        const user = this.data.user;
        const userUpdated = this.service.updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        } else {
            return textResult("invalid user");
        }

    }

    @Summary('get a single user by id')
    @Response(HTTP_STATUS_CODE.Ok, User)
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @Param('id', 1, 'user id')
    @Worker(HTTP_METHOD.Get)
    @Route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = this.service.getUser(userId);
        if (user == null) {
            return textResult("invalid user id", 404);
        }
        return jsonResult(user);

    }

    @Summary('remove a single user by id')
    @Response(HTTP_STATUS_CODE.Ok, 'user deleted')
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @Worker(HTTP_METHOD.Delete)
    @Route("/{id}")
    async removeUser() {

        const userId = Number(this.param.id);
        const user = this.service.getUser(userId);
        if (user != null) {
            this.service.removeUser(userId);
            return textResult("user deleted");
        } else {
            return textResult("invalid user id", 404);
        }
    }

}