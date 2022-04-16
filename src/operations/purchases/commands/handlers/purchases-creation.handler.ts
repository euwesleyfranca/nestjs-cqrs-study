import { Logger } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { PurchaseCommand } from '../impl/create-purchase.command';
import { CreatePurchaseEvent } from '../../events/create-purchase.event';

@CommandHandler(PurchaseCommand)
export class PurchaseCreationHandler
  implements ICommandHandler<PurchaseCommand>
{
  constructor(private eventBus: EventBus) {}

  async execute(command: PurchaseCommand) {
    const { createPurchaseDTO } = command;
    Logger.log('CommandBus - iniciando operação...');
    await this.eventBus.publish(new CreatePurchaseEvent(createPurchaseDTO));
  }
}
