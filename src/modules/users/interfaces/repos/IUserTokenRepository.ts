import UserTokenEntity from '@modules/users/infra/db/entities/UserTokenEntity';

export default interface IUserTokenRepository {
  create(userId: number): Promise<UserTokenEntity>;
  findByToken(token: string): Promise<UserTokenEntity | undefined>;
}
