import { Module } from '@nestjs/common';
import { TypesCompaniesService } from './types-companies.service';
import { TypesCompaniesController } from './types-companies.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TypesCompany} from "./entities/types-company.entity";

@Module({
  controllers: [TypesCompaniesController],
  providers: [TypesCompaniesService],
  imports: [
    TypeOrmModule.forFeature([TypesCompany])
  ]
})
export class TypesCompaniesModule {}
