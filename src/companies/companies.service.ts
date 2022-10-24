import {Injectable, InternalServerErrorException, Logger, NotFoundException} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Company} from "./entities/company.entity";
import {PaginationDto} from "../common/dto/pagination.dto";

@Injectable()
export class CompaniesService {

  private readonly logger = new Logger('CompaniesService');

  constructor(
      @InjectRepository(Company)
      private readonly companyRepository: Repository<Company>
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      const company = this.companyRepository.create(createCompanyDto);
      await this.companyRepository.save(company);
      return company;
    }catch (e) {
      this.logger.error({
        datetime: Date.now(),
        path: '/create',
        error: e
      });
      throw new InternalServerErrorException('An error occurred on our server in the creation of the company.');
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const {limit = +process.env.PAGINATION_LIMIT, offset = 0} = paginationDto;
    return await this.companyRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: number) {
    const resultCompany =  await this.companyRepository.findOneBy({id});
    if(!resultCompany)
      throw new NotFoundException(`Company with id ${id} not found`);
    return resultCompany;
  }

  async findOneByName(name: string) {
    const resultCompany =  await this.companyRepository.findOneBy({companyName: name});
    if(!resultCompany)
      throw new NotFoundException(`Company with name ${name} not found`);
    return resultCompany;
  }

  async findOneByEmail(email: string) {
    const resultCompany =  await this.companyRepository.findOneBy({mainEmail: email});
    if(!resultCompany)
      throw new NotFoundException(`Company with email ${email} not found`);
    return resultCompany;
  }

  async findOneByNit(nit: string) {
    const resultCompany =  await this.companyRepository.findOneBy({identificationNumber: nit});
    if(!resultCompany)
      throw new NotFoundException(`Company with identification number ${nit} not found`);
    return resultCompany;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const companyResult = await this.companyRepository.preload({
      id: id,
      ...updateCompanyDto
    });
    if(!companyResult)
      throw new NotFoundException(`Company with id ${id} not found`);
    try{
      await this.companyRepository.save(companyResult);
    }catch (e) {
      this.logger.error({
        datetime: Date.now(),
        path: '/update',
        error: e
      });
      throw new InternalServerErrorException('An error occurred on our server in the update of the company.');
    }
    return companyResult;
  }

  async remove(id: number) {
    const companyFind = await this.findOne(id);
    return await this.companyRepository.remove(companyFind);
  }
}
