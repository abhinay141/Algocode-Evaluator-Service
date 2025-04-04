import express from 'express';

import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import sampleWorker from './workers/SampleWorker';
import sampleQueue from './queues/sampleQueue';
const { createBullBoard } = require('bull-board');
// const { BullAdapter } = require('bull-board/bullAdapter');
const { BullMQAdapter } = require('bull-board/bullMQAdapter');

const app = express();

app.use('/api', apiRouter);

// BullBoard setup

const { router } = createBullBoard([new BullMQAdapter(sampleQueue)]);

//

app.use('/admin/queues', router); // Add this line to serve the BullBoard UI

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);

  sampleWorker('sampleQueue'); //creating a new worker with the name sampleQueue and passing the redis connection

  sampleQueueProducer(
    'SampleJob',
    {
      name: 'abhil',
      age: 23,
      position: 'developer',
    },
    2
  ); //creating a new job with the name SampleJob and passing the payload and priority

  sampleQueueProducer(
    'SampleJob',
    {
      name: 'abhi',
      age: 24,
      position: 'dev',
    },
    1
  ); //creating a new job with the name SampleJob and passing the payload and priority
});
