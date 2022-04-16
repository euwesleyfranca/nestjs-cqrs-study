import { Injectable, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PurchaseCommand } from './commands/impl/create-purchase.command';

@Injectable()
export class PurchasesService {
  constructor(private readonly commandBus: CommandBus) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    Logger.log('*************** Purchases Service ***************');
    return await this.commandBus.execute(
      new PurchaseCommand(createPurchaseDto),
    );
  }
}
