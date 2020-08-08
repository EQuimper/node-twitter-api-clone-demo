import TweetEntity from '@modules/tweets/infra/db/entities/TweetEntity';
import ICreateTweetDto from '@modules/tweets/interfaces/dtos/ICreateTweetDto';

export default interface ITweetsRepository {
  findById(id: number): Promise<TweetEntity | undefined>;
  findAll(): Promise<TweetEntity[]>;
  create(data: ICreateTweetDto): Promise<TweetEntity | undefined>;
}
