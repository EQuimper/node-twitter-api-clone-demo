export interface IAuthConfig {
  jwt: string;
  expiresIn: string;
}

export const authConfig: IAuthConfig = {
  jwt: process.env.JWT_SECRET || 'thisisasecrettochange',
  expiresIn: '7d',
};
