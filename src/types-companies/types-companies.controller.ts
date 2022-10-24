import { Controller, Get } from '@nestjs/common';
import { TypesCompaniesService } from './types-companies.service';

@Controller('types-companies')
export class TypesCompaniesController {
  constructor(private readonly typesCompaniesService: TypesCompaniesService) {}

  @Get()
  findAll() {
    return this.typesCompaniesService.findAll();
  }

}
