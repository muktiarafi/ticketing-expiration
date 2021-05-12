import { Kafka } from 'kafkajs';
import { producerWrapper } from './events/producer/producer-wrapper';
import { consumerWrapper } from './events/consumer/consumer-wrapper';

const run = async () => {
  const kafkaProducer = new Kafka({
    brokers: [`${process.env.PRODUCER_HOST}:${process.env.PRODUCER_PORT}`],
  });
  const kafkaConsumer = new Kafka({
    brokers: [`${process.env.CONSUMER_HOST}:${process.env.CONSUMER_PORT}`],
  });

  await producerWrapper.connect(kafkaProducer);
  await consumerWrapper.connect(kafkaConsumer);
  await consumerWrapper.run();
};

run().catch(console.error);
