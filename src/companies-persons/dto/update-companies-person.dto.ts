import { PartialType } from '@nestjs/mapped-types';
import { CreateCompaniesPersonDto } from './create-companies-person.dto';

export class UpdateCompaniesPersonDto extends PartialType(CreateCompaniesPersonDto) {}
