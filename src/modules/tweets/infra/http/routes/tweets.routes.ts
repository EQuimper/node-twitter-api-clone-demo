import ICreateTweetDto from '@modules/tweets/interfaces/dtos/ICreateTweetDto';
import isAuthenticated from '@modules/users/infra/http/middlewarees/isAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import TweetsController from '@modules/tweets/infra/http/controllers/TweetsController';

const tweetsRouter = Router();

const tweetsController = new TweetsController();

tweetsRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object<ICreateTweetDto>().keys({
      body: Joi.string().required().max(250),
    }),
  }),
  tweetsController.create,
);

export default tweetsRouter;
