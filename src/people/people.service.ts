import { Dependencies, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { GetPeopleCommand } from './command/get.command';
import { PeopleCommand } from './command/people.command';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
@Dependencies(CommandBus)
export class PeopleService {
  constructor(private readonly commandBus: CommandBus) {}

  async create(createPersonDto: CreatePersonDto) {
    const { username, password } = createPersonDto;
    return await this.commandBus.execute(new PeopleCommand(username, password));
  }

  async getAll() {
    return await this.commandBus.execute(new GetPeopleCommand());
  }
}
