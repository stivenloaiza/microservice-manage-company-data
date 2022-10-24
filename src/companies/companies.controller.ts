import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {PaginationDto} from "../common/dto/pagination.dto";

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.companiesService.findAll(paginationDto);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.companiesService.findOne(+id);
  }

  @Get('/name/:name')
  findOneByName(@Param('name') name: string) {
    return this.companiesService.findOneByName(name);
  }

  @Get('/email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.companiesService.findOneByEmail(email);
  }

  @Get('/nit/:nit')
  findOneByNit(@Param('nit') nit: string) {
    return this.companiesService.findOneByNit(nit);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.companiesService.remove(+id);
  }
}
