import { Job, Worker } from 'bullmq';

import SampleJob from '../jobs/SampleJob';
import redisConnection from '../config/redisConfig';

export default function sampleWorker(queueName: string) {
  new Worker(queueName, 
    async (job: Job) => {
    if (job.name === 'SampleJob') {
      const sampleJob = new SampleJob(job.data);
      await sampleJob.handle(job);
      return true;
    }},
    {
        connection : redisConnection
    }


   );
}
