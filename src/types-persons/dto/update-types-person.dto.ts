import { PartialType } from '@nestjs/mapped-types';
import { CreateTypesPersonDto } from './create-types-person.dto';

export class UpdateTypesPersonDto extends PartialType(CreateTypesPersonDto) {}
