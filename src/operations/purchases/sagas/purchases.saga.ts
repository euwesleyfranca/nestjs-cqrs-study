import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { delay, map, Observable } from 'rxjs';
import { PurchaseSagaCommand } from './commands/PurchaseSaga.command';
import { CreatePurchaseEvent } from '../events/create-purchase.event';
import { CreateItemsPurchaseEvent } from '../../../operations/itemspurchases/commands/events/create-itemspurchase.event';

@Injectable()
export class PurchasesSagas {
  @Saga()
  purchase = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      //ofType(CreatePurchaseEvent, CreateItemsPurchaseEvent),
      //delay(1000),
      map((event) => {
        console.log('event: ', event);
        return new PurchaseSagaCommand(event.createPurchaseDTO);
      }),
    );
  };
}
