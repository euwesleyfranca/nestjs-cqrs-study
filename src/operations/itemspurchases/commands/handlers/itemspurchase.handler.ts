import { Logger } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateItemsPurchaseEvent } from '../events/create-itemspurchase.event';
import { CreateItemsPurchaseCommand } from '../implementation/create-itemspurchase.command';

@CommandHandler(CreateItemsPurchaseCommand)
export class ItemsPurchaseHandler
  implements ICommandHandler<CreateItemsPurchaseCommand>
{
  constructor(private eventBus: EventBus) {}

  async execute(command: CreateItemsPurchaseCommand) {
    const { createItemsPurchaseDTO } = command;
    Logger.log('Iniciando commandBus...');
    await this.eventBus.publish(
      new CreateItemsPurchaseEvent(createItemsPurchaseDTO),
    );
  }
}
