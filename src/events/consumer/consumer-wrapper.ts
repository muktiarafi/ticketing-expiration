import { Kafka, Consumer } from 'kafkajs';
import { OrderCreatedEvent } from '../../proto/order-created-event';
import { expirationQueue } from '../../queue/expiration-queue';

class ConsumerWrapper {
  private consumer?: Consumer;

  async connect(client: Kafka) {
    this.consumer = client.consumer({ groupId: 'expiration-services' });
    await this.consumer.connect();
  }

  async run() {
    if (!this.consumer) {
      throw new Error('Consumer not connected yet!');
    }
    this.consumer.subscribe({
      topic: 'order-created',
      fromBeginning: true,
    });
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        const orderCreatedData = OrderCreatedEvent.decode(message.value!);
        const delay =
          new Date(orderCreatedData.expiresAt).getTime() - new Date().getTime();

        console.log('received event from topic:', 'order-created');
        console.log('current offset:', message.offset);
        console.log('current delay', delay);

        await expirationQueue.add(
          {
            orderId: orderCreatedData.id as number,
          },
          {
            delay,
          }
        );
      },
    });
  }
}

export const consumerWrapper = new ConsumerWrapper();
