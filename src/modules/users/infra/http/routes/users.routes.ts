import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

const usersRouter = Router();

usersRouter.post('/', celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    passwordConfirmation: Joi.ref('password')
  })
}))

export default usersRouter;