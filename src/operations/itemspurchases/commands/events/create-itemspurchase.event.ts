import { CreateItemspurchaseDto } from '../../dto/create-itemspurchase.dto';

export class CreateItemsPurchaseEvent {
  constructor(public readonly createPurchaseDTO: CreateItemspurchaseDto) {}
}
