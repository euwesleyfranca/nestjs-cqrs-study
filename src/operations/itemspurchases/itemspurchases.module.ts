import { Module } from '@nestjs/common';
import { ItemspurchasesService } from './itemspurchases.service';
import { ItemspurchasesController } from './itemspurchases.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ItemsPurchaseHandler } from './commands/handlers/itemspurchase.handler';
import { CreatePurchaseHandler } from './commands/handlers/create-itemspurchase.handler';
import { CreateItemsPurchaseEvent } from './commands/events/create-itemspurchase.event';
import { ItemsPurchaseRepository } from './repository/itemspurchase.repository';

export const CommandHandlers = [ItemsPurchaseHandler, CreatePurchaseHandler];
export const EventHandlers = [CreateItemsPurchaseEvent];

@Module({
  imports: [CqrsModule],
  controllers: [ItemspurchasesController],
  providers: [
    ItemspurchasesService,
    ...CommandHandlers,
    ...EventHandlers,
    ItemsPurchaseRepository,
  ],
})
export class ItemspurchasesModule {}
