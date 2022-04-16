import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { PurchaseCreationHandler } from './commands/handlers/purchases-creation.handler';
import { CreatePurchaseEvent } from './events/create-purchase.event';
import { PurchaseRepository } from './repository/purchase.repository';
import { PurchaseEventHandler } from './events/handlers/purchase-event.handler';
import { ItemspurchasesService } from '../itemspurchases/itemspurchases.service';
import { PurchasesSagas } from './sagas/purchases.saga';
import { PurchaseSagaHandler } from './sagas/handlers/purchase-saga.handler';

export const CommandHandlers = [
  PurchaseCreationHandler,
  PurchaseEventHandler,
  PurchaseSagaHandler,
];
export const EventHandlers = [CreatePurchaseEvent];

@Module({
  imports: [CqrsModule],
  controllers: [PurchasesController],
  providers: [
    PurchasesService,
    PurchasesSagas,
    ...CommandHandlers,
    ...EventHandlers,
    PurchaseRepository,
    ItemspurchasesService,
  ],
})
export class PurchasesModule {}
