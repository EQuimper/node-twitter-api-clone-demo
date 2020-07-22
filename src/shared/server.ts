import 'reflect-metadata';

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`)
});
