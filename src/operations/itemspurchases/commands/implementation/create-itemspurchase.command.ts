import { CreateItemspurchaseDto } from '../../dto/create-itemspurchase.dto';

export class CreateItemsPurchaseCommand {
  constructor(public readonly createItemsPurchaseDTO: CreateItemspurchaseDto) {}
}
