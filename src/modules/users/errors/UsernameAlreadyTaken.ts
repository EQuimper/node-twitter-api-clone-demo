import IAppError from '@shared/errors/IAppError';

export default class UsernameAlreadyTaken implements IAppError {
  public message: string;
  public statusCode: number;

  constructor() {
    this.message = 'username already taken';
    this.statusCode = 400;
  }
}
