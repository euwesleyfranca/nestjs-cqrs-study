import { CreatePurchaseDto } from '../dto/create-purchase.dto';

export class CreatePurchaseEvent {
  constructor(public readonly createPurchaseDTO: CreatePurchaseDto) {}
}
