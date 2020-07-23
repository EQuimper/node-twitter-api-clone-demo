import IAppError from './IAppError';

export default class UnauthorizedError implements IAppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string = 'Unauthorized') {
    this.message = message;
    this.statusCode = 401;
  }
}
