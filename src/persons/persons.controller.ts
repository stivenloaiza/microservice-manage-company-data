import {Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import {PaginationDto} from "../common/dto/pagination.dto";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Person } from "./entities/person.entity";

@ApiTags('Persons')
@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Person' })
  @ApiResponse({ status: 201, description: 'Successful', type: Person})
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personsService.create(createPersonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all persons, paginated' })
  @ApiResponse({ status: 200, description: 'Successful', type: [Person] })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiQuery({name:'limit', required: false,})
  @ApiQuery({name:'offset', required: false,})
  findAll(@Query() paginationDto: PaginationDto) {
    return this.personsService.findAll(paginationDto);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get one Person by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: Person })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.personsService.findOne(+id);
  }

  @Get('/name/:name')
  @ApiOperation({ summary: 'Get one Person by name' })
  @ApiResponse({ status: 200, description: 'Successful', type: Person })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOneByName(@Param('name') name: string) {
    return this.personsService.findOneByName(name);
  }

  @Get('/email/:email')
  @ApiOperation({ summary: 'Get one Person by email' })
  @ApiResponse({ status: 200, description: 'Successful', type: Person })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOneByEmail(@Param('email') email: string) {
    return this.personsService.findOneByEmail(email);
  }

  @Get('/cc/:cc')
  @ApiOperation({ summary: 'Get one Person by identification number' })
  @ApiResponse({ status: 200, description: 'Successful' , type: Person})
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOneByCC(@Param('cc') cc: string) {
    return this.personsService.findOneByCC(cc);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update one Person by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: Person })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param('id', ParseIntPipe) id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personsService.update(+id, updatePersonDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete one Person by id' })
  @ApiResponse({ status: 200, description: 'Successful', type: Person })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Data not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.personsService.remove(+id);
  }
}
