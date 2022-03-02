import { Injectable } from '@nestjs/common';

@Injectable()
export class PeopleRepository {
  async create(username, password) {
    console.log('Passei no repository...', username, password);
  }
}
