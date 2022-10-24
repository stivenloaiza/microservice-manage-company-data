import { PartialType } from '@nestjs/swagger';
import { CreateCompaniesPersonDto } from './create-companies-person.dto';

export class UpdateCompaniesPersonDto extends PartialType(CreateCompaniesPersonDto) {}
