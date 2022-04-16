import { PartialType } from '@nestjs/mapped-types';
import { CreateItemspurchaseDto } from './create-itemspurchase.dto';

export class UpdateItemspurchaseDto extends PartialType(CreateItemspurchaseDto) {}
