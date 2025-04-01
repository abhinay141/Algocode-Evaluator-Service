import { IJob } from '../types/bullMqJobDefinition';
import { Job } from 'bullmq';

export default class SampleJob implements IJob {
  name: string; //defining the name variable in Ts
  payload: Record<string, unknown>; //defining the payload variable in TS
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }

  handle = (job?: Job) => {
    //implementing the handle method inside the IJob interface above, we use arrow as we don't need the this keyword here if you need the this keyword, use normal fn            console.log('Job is being processed');

    console.log('job handler called');
    if (job) {
      console.log(job.id); //if the job is being processed, log the job id
    }
  };

  failed = (job?: Job): void => {
    console.log('Job failed');
    if (job) {
      console.log(job.id); //if the job fails, log the job id
    }
  };
}
