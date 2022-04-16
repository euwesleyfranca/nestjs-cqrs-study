import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PurchaseRepository {
  async create(data) {
    Logger.log('Repository - Compra criada na base de dados...');
  }

  async findById() {
    Logger.log('Fiz a busca do investidor no banco...');
  }
}
