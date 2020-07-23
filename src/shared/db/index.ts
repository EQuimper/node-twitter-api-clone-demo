import { createConnections } from 'typeorm';

createConnections()
  .then(() => console.log('database connect'))
  .catch((err) => console.log('database error: ', err));
