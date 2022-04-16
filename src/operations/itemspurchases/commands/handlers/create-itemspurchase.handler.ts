import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ItemsPurchaseRepository } from '../../repository/itemspurchase.repository';
import { CreateItemsPurchaseEvent } from '../events/create-itemspurchase.event';

@EventsHandler(CreateItemsPurchaseEvent)
export class CreatePurchaseHandler
  implements IEventHandler<CreateItemsPurchaseEvent>
{
  constructor(private readonly respository: ItemsPurchaseRepository) {}
  handle(event: CreateItemsPurchaseEvent) {
    Logger.log('Create Items Purchase - Recebendo Informações...');
    Logger.log('Enviando para ItemsPurchaseRepository...');
    this.respository.create(event.createPurchaseDTO);
  }
}
