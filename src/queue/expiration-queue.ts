import Queue from 'bull';
import { producerWrapper } from '../events/producer/producer-wrapper';
import { ExpirationCompleteEvent } from '../proto/expiration-complete-event';

interface Payload {
  orderId: number;
}

export const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

expirationQueue.process(async (job) => {
  const expirationCompleteData = ExpirationCompleteEvent.create({
    orderId: job.data.orderId,
  });
  const buf = ExpirationCompleteEvent.encode(
    expirationCompleteData
  ).finish() as Buffer;

  await producerWrapper.produce('expiration-complete', buf);
});
