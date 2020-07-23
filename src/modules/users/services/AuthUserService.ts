import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import IUsersRepository from '@modules/users/interfaces/repos/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/interfaces/IHashProvider';
import UserEntity from '@modules/users/infra/db/entities/UserEntity';
import { authConfig } from '@config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: UserEntity;
  token: string;
}

@injectable()
export default class AuthUserService {
  constructor(
    @inject('UsersRepository')
    private _usersRepository: IUsersRepository,

    @inject('HashProvider')
    private _hashProvider: IHashProvider,
  ) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const user = await this._usersRepository.findByEmail(data.email);
    if (!user) {
      throw new Error('Email/Password combination error');
    }

    const passwordMatched = await this._hashProvider.compareHash(
      data.password,
      user.password,
    );
    if (!passwordMatched) {
      throw new Error('Email/Password combination error');
    }

    const token = sign({}, authConfig.jwt, {
      subject: String(user.id),
      expiresIn: authConfig.expiresIn,
    });

    return { user, token };
  }
}
