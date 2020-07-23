import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UsersController from '@modules/users/infra/http/controllers/users.controller';
import ICreateUserDto from '@modules/users/interfaces/dtos/ICreateUserDto';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object<ICreateUserDto & { passwordConfirmation: string }>({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      passwordConfirmation: Joi.ref('password'),
    }),
  }),
  usersController.create,
);

export default usersRouter;
