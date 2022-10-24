import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TypesCompany} from "./entities/types-company.entity";

@Injectable()
export class TypesCompaniesService {

  private readonly logger = new Logger('TypesCompaniesService');

  constructor(
      @InjectRepository(TypesCompany)
      private readonly typesCompanyRepository: Repository<TypesCompany>
  ) {}

  async findAll() {
    return await this.typesCompanyRepository.find({});
  }

}
