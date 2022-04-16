import { Logger } from '@nestjs/common';
import { EventBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ItemspurchasesService } from 'src/operations/itemspurchases/itemspurchases.service';
import { CreatePurchaseEvent } from '../create-purchase.event';
import { PurchaseRepository } from '../../repository/purchase.repository';
import { CreateItemsPurchaseEvent } from '../../../itemspurchases/commands/events/create-itemspurchase.event';

@EventsHandler(CreatePurchaseEvent)
export class PurchaseEventHandler
  implements IEventHandler<CreatePurchaseEvent>
{
  constructor(
    private readonly respository: PurchaseRepository,
    private readonly eventBus: EventBus,
    private readonly itemsPurchaseService: ItemspurchasesService,
  ) {}
  async handle(event: CreatePurchaseEvent) {
    Logger.log('Enviando informações para Purchase Repository...');
    await this.respository.create(event.createPurchaseDTO);

    await this.eventBus.publish(
      new CreateItemsPurchaseEvent(event.createPurchaseDTO),
    );
    //await this.itemsPurchaseService.create(event.createPurchaseDTO);
  }
}
