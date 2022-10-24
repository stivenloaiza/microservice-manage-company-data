import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {PaginationDto} from "../common/dto/pagination.dto";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Company } from "./entities/company.entity";

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new company' })
  @ApiResponse({ status: 201, description: 'Successful', type: Company})
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all companies, paginated' })
  @ApiResponse({ status: 200, description: 'Successful', type: [Company] })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiQuery({name:'limit', required: false,})
  @ApiQuery({name:'offset', required: false,})
  findAll(@Query() paginationDto: PaginationDto) {
    return this.companiesService.findAll(paginationDto);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get one company by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: Company })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.companiesService.findOne(+id);
  }

  @Get('/name/:name')
  @ApiOperation({ summary: 'Get one company by name' })
  @ApiResponse({ status: 200, description: 'Successful', type: Company })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOneByName(@Param('name') name: string) {
    return this.companiesService.findOneByName(name);
  }

  @Get('/email/:email')
  @ApiOperation({ summary: 'Get one company by email' })
  @ApiResponse({ status: 200, description: 'Successful', type: Company })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOneByEmail(@Param('email') email: string) {
    return this.companiesService.findOneByEmail(email);
  }

  @Get('/nit/:nit')
  @ApiOperation({ summary: 'Get one company by identification number' })
  @ApiResponse({ status: 200, description: 'Successful' , type: Company})
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOneByNit(@Param('nit') nit: string) {
    return this.companiesService.findOneByNit(nit);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update one company by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: Company })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param('id', ParseIntPipe) id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete one company by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: Company })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.companiesService.remove(+id);
  }
}
