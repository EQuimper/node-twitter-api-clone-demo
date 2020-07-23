import { hash, compare } from 'bcryptjs'

import IHashProvider from "./interfaces/IHashProvider";

export default class BCryptHashProvider implements IHashProvider {
  public generateHash(payload: string): Promise<string> {
    return hash(payload, 6);
  }

  public compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed)
  }
}