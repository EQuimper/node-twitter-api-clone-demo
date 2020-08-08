import { Response, Request } from 'express';
import { container } from 'tsyringe';

import CreateTweetService from '@modules/tweets/servives/CreateTweetService';

export default class TweetsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { body } = req.body;
    const user = req.user;

    const tweetService = container.resolve(CreateTweetService);

    const tweet = await tweetService.execute({ body, userId: user.id });

    return res.status(201).json(tweet);
  }
}
