import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthUserService from '@modules/users/services/AuthUserService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authUserService = container.resolve(AuthUserService);

    const { user, token } = await authUserService.execute({ email, password });

    return res.json({ user: classToClass(user), token });
  }
}
