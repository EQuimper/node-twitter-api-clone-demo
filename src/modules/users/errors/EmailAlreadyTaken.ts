import IAppError from '@shared/errors/IAppError';

export default class EmailAlreadyTaken implements IAppError {
  public message: string;
  public statusCode: number;

  constructor() {
    this.message = 'Email already taken';
    this.statusCode = 400;
  }
}
