import { Request, Response } from 'express';

export default class SessionsController {
  public create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
  }
}
