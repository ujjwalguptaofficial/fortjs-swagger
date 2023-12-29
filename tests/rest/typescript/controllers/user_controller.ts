import { Controller, textResult, defaultWorker, jsonResult, worker, route, HTTP_STATUS_CODE, HTTP_METHOD, guards, shields } from 'fortjs';
import { UserService } from '../services/user_service';
import { ModelUserGuard } from '../guards/model_user_guard';
import { User } from '../models/user';
import { Response, Body, Param, Summary, Description, Security, Tag } from 'fortjs-swagger';
import { AuthenticationShield } from '../shields/authentication_shield';


@shields(AuthenticationShield)
@Security('basicAuth')
@Tag('User', 'All operations related to user' as any)
export class UserController extends Controller {

    @Summary('get all users')
    @Description('return all saved users')
    @defaultWorker()
    @Response(HTTP_STATUS_CODE.Ok, [User])
    async getUsers() {
        const service = new UserService();
        return jsonResult(service.getUsers());
    }


    @Summary('Add user')
    @worker(HTTP_METHOD.Post)
    @route("/")
    @guards(ModelUserGuard)
    @Response(HTTP_STATUS_CODE.Created, User)
    @Body(User, "User model")
    async addUser() {
        const user = this.data.user;
        const service = new UserService();
        const newUser = service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Summary('Update user')
    @Response(HTTP_STATUS_CODE.Ok, User)
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @worker(HTTP_METHOD.Put)
    @guards(ModelUserGuard)
    @route("/")
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

    @Summary('get a single user by id')
    @Response(HTTP_STATUS_CODE.Ok, User)
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @Param('id', 1, 'user id')
    @worker(HTTP_METHOD.Get)
    @route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid id", HTTP_STATUS_CODE.NotFound);
        }
        return jsonResult(user);

    }

    @Summary('remove a single user by id')
    @Response(HTTP_STATUS_CODE.Ok, 'user deleted')
    @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @worker(HTTP_METHOD.Delete)
    @route("/{id}")
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

    @Summary('an api without response')
    // @Response(HTTP_STATUS_CODE.Ok, 'user deleted')
    // @Response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @worker(HTTP_METHOD.Get)
    async apiWithoutResponse() {
        return textResult("api without response");
    }

}