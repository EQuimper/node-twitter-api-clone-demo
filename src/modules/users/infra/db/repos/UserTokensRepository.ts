import { getRepository, Repository } from 'typeorm';

import IUserTokenRepository from '@modules/users/interfaces/repos/IUserTokenRepository';

import UserTokenEntity from '../entities/UserTokenEntity';

export default class UserTokensRepository implements IUserTokenRepository {
  private _db: Repository<UserTokenEntity>;

  constructor() {
    this._db = getRepository(UserTokenEntity);
  }

  public create(userId: number): Promise<UserTokenEntity> {
    const userToken = this._db.create({ userId });

    return this._db.save(userToken);
  }

  public findByToken(token: string): Promise<UserTokenEntity | undefined> {
    return this._db.findOne({ where: { token } });
  }
}
