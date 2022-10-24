import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Person} from "./entities/person.entity";
import {TypesPerson} from "../types-persons/entities/types-person.entity";

@Module({
  controllers: [PersonsController],
  providers: [PersonsService],
  imports: [
    TypeOrmModule.forFeature([Person, TypesPerson])
  ]
})
export class PersonsModule {}
