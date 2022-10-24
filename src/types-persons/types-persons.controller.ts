import { Controller, Get } from '@nestjs/common';
import { TypesPersonsService } from './types-persons.service';

@Controller('types-persons')
export class TypesPersonsController {
  constructor(private readonly typesPersonsService: TypesPersonsService) {}

  @Get()
  findAll() {
    return this.typesPersonsService.findAll();
  }

}
