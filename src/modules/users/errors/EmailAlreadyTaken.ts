import IAppError from '@shared/errors/IAppError';

export default class EmailAlreadyTaken implements IAppError {
  public message: string;
  public statusCode: number;

  constructor() {
    this.message = 'email already taken';
    this.statusCode = 400;
  }
}
