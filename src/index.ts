import express from 'express';

import serverConfig from './config/serverConfig';
import apiRouter from './routes';

const app = express();

app.use('/api', apiRouter);

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
