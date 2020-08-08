import TweetEntity from '@modules/tweets/infra/db/entities/TweetEntity';
import ICreateTweetDto from '@modules/tweets/interfaces/dtos/ICreateTweetDto';
import ITweetsRepository from '@modules/tweets/interfaces/repos/ITweetsRepository';
import { inject, injectable } from 'tsyringe';

interface IData {
  body: string;
  userId: number;
}

@injectable()
export default class CreateTweetService {
  constructor(
    @inject('TweetsRepository')
    private _tweetsRepository: ITweetsRepository,
  ) {}

  public async execute(data: IData): Promise<TweetEntity> {
    try {
    } catch (error) {}
  }
}
