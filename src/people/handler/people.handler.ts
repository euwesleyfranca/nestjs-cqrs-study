import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PeopleCommand } from '../command/people.command';
import { PeopleRepository } from '../repository/people.repository';
@CommandHandler(PeopleCommand)
export class PeopleHandler implements ICommandHandler<PeopleCommand> {
  constructor(
    private readonly repository: PeopleRepository,
    private readonly publish: EventPublisher,
  ) {}

  async execute(command: PeopleCommand) {
    const { username, password } = command;

    console.log('executando commandBus...');

    await this.repository.create(username, password);

    console.log(
      'Dados do cliente: ',
      'Name: ',
      username,
      'Password: ',
      password,
    );

    console.log('Fim da execução!');

    return command;
  }
}
