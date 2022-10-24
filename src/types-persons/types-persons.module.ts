import { Module } from '@nestjs/common';
import { TypesPersonsService } from './types-persons.service';
import { TypesPersonsController } from './types-persons.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TypesPerson} from "./entities/types-person.entity";

@Module({
  controllers: [TypesPersonsController],
  providers: [TypesPersonsService],
  imports: [
    TypeOrmModule.forFeature([TypesPerson])
  ]
})
export class TypesPersonsModule {}
