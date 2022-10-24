import { Module } from '@nestjs/common';
import { CompaniesPersonsService } from './companies-persons.service';
import { CompaniesPersonsController } from './companies-persons.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Company} from "../companies/entities/company.entity";
import {Person} from "../persons/entities/person.entity";
import {CompaniesPerson} from "./entities/companies-person.entity";

@Module({
  controllers: [CompaniesPersonsController],
  providers: [CompaniesPersonsService],
  imports: [
    TypeOrmModule.forFeature([Company, Person, CompaniesPerson])
  ]
})
export class CompaniesPersonsModule {}
