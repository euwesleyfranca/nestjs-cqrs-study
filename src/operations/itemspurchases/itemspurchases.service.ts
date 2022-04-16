import { Injectable, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateItemsPurchaseCommand } from './commands/implementation/create-itemspurchase.command';
import { CreateItemspurchaseDto } from './dto/create-itemspurchase.dto';

@Injectable()
export class ItemspurchasesService {
  constructor(private readonly commandBus: CommandBus) {}
  async create(createItemspurchaseDto: CreateItemspurchaseDto) {
    Logger.log('');
    Logger.log(
      '****************** Items Purchases Service *******************',
    );
    return this.commandBus.execute(
      new CreateItemsPurchaseCommand(createItemspurchaseDto),
    );
  }
}
