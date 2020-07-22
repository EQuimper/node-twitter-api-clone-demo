import { Repository, getRepository } from 'typeorm';

import IUsersRepository from '@modules/users/interfaces/repos/IUsersRepository';
import ICreateUserDto from '@modules/users/interfaces/dtos/ICreateUserDto';

import UserEntity from '../entities/UserEntity';

export default class UsersRepository implements IUsersRepository {
  private _db: Repository<UserEntity>;

  constructor() {
    this._db = getRepository(UserEntity);
  }

  public async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this._db.findOne({ where: { email } });
  }

  public async findByUsername(username: string): Promise<UserEntity | undefined> {
    return this._db.findOne({ where: { username } });
  }

  public async create(data: ICreateUserDto): Promise<UserEntity> {
    const user = this._db.create(data);

    return this._db.save(user);
  }
}
