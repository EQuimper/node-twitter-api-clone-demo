import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateUserService from "@modules/users/services/CreateUserService";
import { classToClass } from "class-transformer";

export default class UsersController {
  public async create(req: Request, res: Response) {
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(req.body);

    return res.json(classToClass(user))
  }
}