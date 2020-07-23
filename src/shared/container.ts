import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/interfaces/repos/IUsersRepository';
import UsersRepository from '@modules/users/infra/db/repos/UsersRepository';
import IUserTokenRepository from '@modules/users/interfaces/repos/IUserTokenRepository';
import UserTokensRepository from '@modules/users/infra/db/repos/UserTokensRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IUserTokenRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
