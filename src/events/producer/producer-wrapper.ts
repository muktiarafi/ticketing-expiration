import { Kafka, Producer } from 'kafkajs';

class ProducerWrapper {
  private producer?: Producer;

  async connect(client: Kafka) {
    this.producer = client.producer();
    await this.producer.connect();
  }

  async produce(topic: string, message: Buffer) {
    if (!this.producer) {
      throw new Error('Producer not connected yet!');
    }
    this.producer.send({
      topic,
      messages: [{ value: message }],
    });
  }
}

export const producerWrapper = new ProducerWrapper();
