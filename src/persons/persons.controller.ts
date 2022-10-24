import {Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import {PaginationDto} from "../common/dto/pagination.dto";

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personsService.create(createPersonDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.personsService.findAll(paginationDto);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.personsService.findOne(+id);
  }

  @Get('/name/:name')
  findOneByName(@Param('name') name: string) {
    return this.personsService.findOneByName(name);
  }

  @Get('/email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.personsService.findOneByEmail(email);
  }

  @Get('/cc/:cc')
  findOneByCC(@Param('cc') cc: string) {
    return this.personsService.findOneByCC(cc);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personsService.update(+id, updatePersonDto);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.personsService.remove(+id);
  }
}
