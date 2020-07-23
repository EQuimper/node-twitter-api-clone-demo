import { container } from 'tsyringe';

import BCryptHashProvider from './BCryptHashProvider';
import IHashProvider from './interfaces/IHashProvider';

container.register<IHashProvider>('HashProvider', BCryptHashProvider);
