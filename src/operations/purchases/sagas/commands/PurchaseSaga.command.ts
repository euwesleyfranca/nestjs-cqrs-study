import { CreatePurchaseDto } from '../../dto/create-purchase.dto';

export class PurchaseSagaCommand {
  constructor(public readonly createPurchaseDTO: CreatePurchaseDto) {}
}
