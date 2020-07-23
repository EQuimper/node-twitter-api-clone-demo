import { injectable, inject } from 'tsyringe';

import UserEntity from '../infra/db/entities/UserEntity';
import IUsersRepository from '../interfaces/repos/IUsersRepository';
import IHashProvider from '../providers/HashProvider/interfaces/IHashProvider';

interface IRequest {
  username: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private _usersRepository: IUsersRepository,

    @inject('HashProvider')
    private _hashProvider: IHashProvider,
  ) {}

  public async execute(data: IRequest): Promise<UserEntity> {
    const userWithEmailExist = await this._usersRepository.findByEmail(data.email);
    if (userWithEmailExist) {
      throw new Error('Email already taken');
    }

    const userWithUsernameExist = await this._usersRepository.findByUsername(
      data.username,
    );
    if (userWithUsernameExist) {
      throw new Error('Username already taken');
    }

    const hashedPassword = await this._hashProvider.generateHash(data.password);

    return this._usersRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
