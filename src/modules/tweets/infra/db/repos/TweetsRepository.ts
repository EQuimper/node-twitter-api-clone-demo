import { Repository, getRepository } from 'typeorm';

import TweetEntity from '@modules/tweets/infra/db/entities/TweetEntity';
import ICreateTweetDto from '@modules/tweets/interfaces/dtos/ICreateTweetDto';
import ITweetsRepository from '@modules/tweets/interfaces/repos/ITweetsRepository';

export default class TweetsRepository implements ITweetsRepository {
  private _db: Repository<TweetEntity>;

  constructor() {
    this._db = getRepository(TweetEntity);
  }

  create(data: ICreateTweetDto): Promise<TweetEntity | undefined> {
    const tweet = this._db.create(data);

    return this._db.save(tweet);
  }

  findAll(): Promise<TweetEntity[]> {
    return this._db.find();
  }

  findById(id: number): Promise<TweetEntity | undefined> {
    return this._db.findOne({ where: { id } });
  }
}
