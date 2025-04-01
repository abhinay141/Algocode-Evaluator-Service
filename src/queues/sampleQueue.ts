import { Queue } from 'bullmq';
import  redisConnection  from '../config/redisConfig'; //importing the redis connection from the config file

export default new Queue('sampleQueue', {connection: redisConnection}); //creating a new queue with the name sampleQueue and passing the redis connection
