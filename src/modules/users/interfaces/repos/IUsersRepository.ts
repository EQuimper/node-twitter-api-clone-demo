import UserEntity from "@modules/users/infra/db/entities/UserEntity";
import ICreateUserDto from "../dtos/ICreateUserDto";

export default interface IUsersRepository {
  create(data: ICreateUserDto): Promise<UserEntity>
  findByEmail(email: string): Promise<UserEntity | undefined>
  findByUsername(username: string): Promise<UserEntity | undefined>
}