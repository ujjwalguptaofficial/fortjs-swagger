import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards } from 'fortjs';
import { UserService } from '../services/user_service';
import { ModelUserGuard } from '../Guards/model_user_guard';
import { User } from '../models/user';
import { Response, Body, Param } from '@fortjs/swagger';

/**
 * 
 *
 * @export
 * @class UserController
 * @extends {Controller}
 */
export class UserController extends Controller {

    /**
     * get all users
     * @summary get all users
     *
     * @returns
     * @memberof UserController
     */
    @DefaultWorker()
    @Response(HTTP_STATUS_CODE.Ok, [User])
    async getUsers() {
        const service = new UserService();
        return jsonResult(service.getUsers());
    }
    

    @Worker([HTTP_METHOD.Post])
    @Route("/")
    @Guards([ModelUserGuard])
    @Response(HTTP_STATUS_CODE.Created, User)
    @Body(User, "User model")
    async addUser() {
        const user = this.data.user;
        const service = new UserService();
        const newUser = service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Response(HTTP_STATUS_CODE.Ok, User)
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @Worker([HTTP_METHOD.Put])
    @Guards([ModelUserGuard])
    @Route("/")
    async updateUser() {

        const user: User = this.data.user;
        const userUpdated = new UserService().updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        }
        else {
            return textResult("invalid user", HTTP_STATUS_CODE.NotFound);
        }

    }

    @Response(HTTP_STATUS_CODE.Ok, User)
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @Param('id', 1, 'user id')
    @Worker([HTTP_METHOD.Get])
    @Route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid id", HTTP_STATUS_CODE.NotFound);
        }
        return jsonResult(user);

    }

    @Response(HTTP_STATUS_CODE.Ok, 'user deleted')
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @Worker([HTTP_METHOD.Delete])
    @Route("/{id}")
    async removeUser() {

        const userId = Number(this.param.id);
        const service = new UserService();
        const user = service.getUser(userId);
        if (user != null) {
            service.removeUser(userId);
            return textResult("user deleted");
        }
        else {
            return textResult("invalid user", HTTP_STATUS_CODE.NotFound);
        }

    }

}