import express from 'express';

import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import sampleWorker from './workers/SampleWorker';

const app = express();

app.use('/api', apiRouter);

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);

  sampleWorker('sampleQueue'); //creating a new worker with the name sampleQueue and passing the redis connection

  sampleQueueProducer('SampleJob', {
    name: 'abhil',
    age: 23,
    position: 'developer',
  });
});
