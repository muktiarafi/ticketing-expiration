import { Kafka } from 'kafkajs';
import { producerWrapper } from './events/producer/producer-wrapper';
import { consumerWrapper } from './events/consumer/consumer-wrapper';

const run = async () => {
  const kafka = new Kafka({
    brokers: [`${process.env.BROKER_HOST}:${process.env.BROKER_PORT}`],
  });

  await producerWrapper.connect(kafka);
  await consumerWrapper.connect(kafka);
  await consumerWrapper.run();
};

run().catch(console.error);
