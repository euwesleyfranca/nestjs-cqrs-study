import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { PeopleHandler } from './handler/people.handler';
import { PeopleRepository } from './repository/people.repository';
import { GetPeopleHandler } from './handler/get.handler';

export const CommandHandler = [PeopleHandler, GetPeopleHandler];

@Module({
  controllers: [PeopleController],
  providers: [PeopleService, PeopleRepository, ...CommandHandler],
  imports: [CqrsModule],
})
export class PeopleModule {}
