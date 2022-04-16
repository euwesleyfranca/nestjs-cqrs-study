import { Logger } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { PurchaseSagaCommand } from '../commands/PurchaseSaga.command';

@CommandHandler(PurchaseSagaCommand)
export class PurchaseSagaHandler
  implements ICommandHandler<PurchaseSagaCommand>
{
  constructor(private eventBus: EventBus) {}

  async execute(command: PurchaseSagaCommand) {
    const { createPurchaseDTO } = command;
    Logger.log('Purchase Saga...');
    // await this.eventBus.publish(
    //   new CreatePurchaseEvent('1', createPurchaseDTO),
    // );
  }
}
