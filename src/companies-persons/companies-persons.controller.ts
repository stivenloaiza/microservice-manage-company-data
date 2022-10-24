import {Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe} from '@nestjs/common';
import { CompaniesPersonsService } from './companies-persons.service';
import { CreateCompaniesPersonDto } from './dto/create-companies-person.dto';
import { UpdateCompaniesPersonDto } from './dto/update-companies-person.dto';
import {PaginationDto} from "../common/dto/pagination.dto";

@Controller('companies-persons')
export class CompaniesPersonsController {
  constructor(private readonly companiesPersonsService: CompaniesPersonsService) {}

  @Post()
  create(@Body() createCompaniesPersonDto: CreateCompaniesPersonDto) {
    return this.companiesPersonsService.create(createCompaniesPersonDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.companiesPersonsService.findAll(paginationDto);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.companiesPersonsService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateCompaniesPersonDto: UpdateCompaniesPersonDto) {
    return this.companiesPersonsService.update(+id, updateCompaniesPersonDto);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.companiesPersonsService.remove(+id);
  }
}
