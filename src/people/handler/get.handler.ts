import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetPeopleCommand } from '../command/get.command';
@CommandHandler(GetPeopleCommand)
export class GetPeopleHandler implements ICommandHandler<GetPeopleCommand> {
  async execute(command: GetPeopleCommand): Promise<any> {
    console.log('executando commandBus...');

    return {
      msg: 'get executado com sucesso!',
    };
  }
}
