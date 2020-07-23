export default interface IAppError {
  message: string;
  statusCode: number;
}

export function instanceOfIAppError(object: any): object is IAppError {
  return 'message' in object && 'statusCode' in object;
}
