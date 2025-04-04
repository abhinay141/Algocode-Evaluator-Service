import sampleQueue from '../queues/sampleQueue';

export default async function (
  name: string,
  payload: Record<string, unknown>,
  priority: number
) {
  await sampleQueue.add(name, payload, { priority }); //adding the job to the queue with the name sampleJob
}
