import { authConfig } from '@config/auth';
import UnauthorizedError from '@shared/errors/UnauthorizedError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IToken {
  sub: string;
  exp: number;
}

export default function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthorizedError('Token is missing');
  }

  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    throw new UnauthorizedError('Malformation of the token');
  }

  try {
    const tokenDecoded = verify(token, authConfig.jwt);

    const { sub } = tokenDecoded as IToken;

    req.user = {
      id: Number(sub),
    };

    next();
  } catch (error) {
    throw new UnauthorizedError('Invalid token');
  }
}
