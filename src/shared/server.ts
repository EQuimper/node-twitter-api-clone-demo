import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';

import { instanceOfIAppError } from '@shared/errors/IAppError';
import routes from '@shared/routes';

import '@shared/db';
import '@shared/container';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (instanceOfIAppError(err)) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log('err', err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
