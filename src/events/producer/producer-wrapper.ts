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
    console.log('publishing to topic:', topic);
    await this.producer.send({
      acks: 1,
      topic,
      messages: [{ value: message }],
    });
  }
}

export const producerWrapper = new ProducerWrapper();
