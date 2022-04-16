import { CreatePurchaseDto } from '../../dto/create-purchase.dto';

export class PurchaseCommand {
  constructor(public readonly createPurchaseDTO: CreatePurchaseDto) {}
}
