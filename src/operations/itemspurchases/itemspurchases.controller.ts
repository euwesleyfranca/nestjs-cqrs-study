import { Controller, Post, Body } from '@nestjs/common';
import { ItemspurchasesService } from './itemspurchases.service';
import { CreateItemspurchaseDto } from './dto/create-itemspurchase.dto';

@Controller('itemspurchases')
export class ItemspurchasesController {
  constructor(private readonly itemspurchasesService: ItemspurchasesService) {}

  @Post()
  create(@Body() createItemspurchaseDto: CreateItemspurchaseDto) {
    return this.itemspurchasesService.create(createItemspurchaseDto);
  }
}
