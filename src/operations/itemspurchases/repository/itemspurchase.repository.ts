import { Logger } from '@nestjs/common';

export class ItemsPurchaseRepository {
  async create(data) {
    Logger.log('Items Purchase Repository - Criando Items Purchase...');
  }
}
