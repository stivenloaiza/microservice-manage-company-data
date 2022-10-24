import {Injectable, InternalServerErrorException, Logger, NotFoundException} from '@nestjs/common';
import { CreateCompaniesPersonDto } from './dto/create-companies-person.dto';
import { UpdateCompaniesPersonDto } from './dto/update-companies-person.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CompaniesPerson} from "./entities/companies-person.entity";
import {PaginationDto} from "../common/dto/pagination.dto";

@Injectable()
export class CompaniesPersonsService {

  private readonly logger = new Logger('CompaniesPersonsService');

  constructor(
      @InjectRepository(CompaniesPerson)
      private readonly companiesPersonRepository: Repository<CompaniesPerson>
  ) {}

  async create(createCompaniesPersonDto: CreateCompaniesPersonDto) {
    try {
      const companiesPerson = this.companiesPersonRepository.create(createCompaniesPersonDto);
      await this.companiesPersonRepository.save(companiesPerson);
      return companiesPerson;
    }catch (e) {
      this.logger.error({
        datetime: Date.now(),
        path: '/create',
        error: e
      });
      throw new InternalServerErrorException('An error occurred on our server in the creation of the companies-person.');
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const {limit = +process.env.PAGINATION_LIMIT, offset = 0} = paginationDto;
    return await this.companiesPersonRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: number) {
    const resultCompaniesPerson =  await this.companiesPersonRepository.findOneBy({id});
    if(!resultCompaniesPerson)
      throw new NotFoundException(`Companies-Person with id ${id} not found`);
    return resultCompaniesPerson;
  }

  async update(id: number, updateCompaniesPersonDto: UpdateCompaniesPersonDto) {
    const companiesPersonResult = await this.companiesPersonRepository.preload({
      id: id,
      ...updateCompaniesPersonDto
    });
    if(!companiesPersonResult)
      throw new NotFoundException(`Companies-Persons with id ${id} not found`);
    try{
      await this.companiesPersonRepository.save(companiesPersonResult);
    }catch (e) {
      this.logger.error({
        datetime: Date.now(),
        path: '/update',
        error: e
      });
      throw new InternalServerErrorException('An error occurred on our server in the update of the companies-person.');
    }
    return companiesPersonResult;
  }

  async remove(id: number) {
    const companiesPersonFind = await this.findOne(id);
    return await this.companiesPersonRepository.remove(companiesPersonFind);
  }
}
