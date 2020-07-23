import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/interfaces/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/BCryptHashProvider';

container.register<IHashProvider>('HashProvider', BCryptHashProvider);
