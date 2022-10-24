import { Controller, Get } from '@nestjs/common';
import { TypesPersonsService } from './types-persons.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { TypesPerson } from "./entities/types-person.entity";

@ApiTags('Types-persons')
@Controller('types-persons')
export class TypesPersonsController {
  constructor(private readonly typesPersonsService: TypesPersonsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Types Person, paginated' })
  @ApiResponse({ status: 200, description: 'Successful', type: [TypesPerson] })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })

  findAll() {
    return this.typesPersonsService.findAll();
  }

}
