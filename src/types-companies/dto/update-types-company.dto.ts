import { PartialType } from '@nestjs/mapped-types';
import { CreateTypesCompanyDto } from './create-types-company.dto';

export class UpdateTypesCompanyDto extends PartialType(CreateTypesCompanyDto) {}
