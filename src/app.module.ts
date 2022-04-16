import { Module } from '@nestjs/common';
import { PurchasesModule } from './operations/purchases/purchases.module';
import { ItemspurchasesModule } from './operations/itemspurchases/itemspurchases.module';
@Module({
  imports: [PurchasesModule, ItemspurchasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
