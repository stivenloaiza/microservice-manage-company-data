import {Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe} from '@nestjs/common';
import { CompaniesPersonsService } from './companies-persons.service';
import { CreateCompaniesPersonDto } from './dto/create-companies-person.dto';
import { UpdateCompaniesPersonDto } from './dto/update-companies-person.dto';
import {PaginationDto} from "../common/dto/pagination.dto";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CompaniesPerson } from "./entities/companies-person.entity";

@ApiTags('Companies-Persons')
@Controller('companies-persons')
export class CompaniesPersonsController {
  constructor(private readonly companiesPersonsService: CompaniesPersonsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new company person' })
  @ApiResponse({ status: 201, description: 'Successful', type: CompaniesPerson})
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() createCompaniesPersonDto: CreateCompaniesPersonDto) {
    return this.companiesPersonsService.create(createCompaniesPersonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all companies person, paginated' })
  @ApiResponse({ status: 200, description: 'Successful', type: [CompaniesPerson] })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiQuery({name:'limit', required: false,})
  @ApiQuery({name:'offset', required: false,})
  findAll(@Query() paginationDto: PaginationDto) {
    return this.companiesPersonsService.findAll(paginationDto);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get one companies person by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: CompaniesPerson })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.companiesPersonsService.findOne(+id);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update one companies person by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: CompaniesPerson })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param('id', ParseIntPipe) id: string, @Body() updateCompaniesPersonDto: UpdateCompaniesPersonDto) {
    return this.companiesPersonsService.update(+id, updateCompaniesPersonDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete one companies person by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: CompaniesPerson })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.companiesPersonsService.remove(+id);
  }
}
