import {Injectable, InternalServerErrorException, Logger, NotFoundException} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Person} from "./entities/person.entity";
import {PaginationDto} from "../common/dto/pagination.dto";

@Injectable()
export class PersonsService {

  private readonly logger = new Logger('PersonsService');

  constructor(
      @InjectRepository(Person)
      private readonly personRepository: Repository<Person>
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    try {
      const person = this.personRepository.create(createPersonDto);
      await this.personRepository.save(person);
      return person;
    }catch (e) {
      this.logger.error({
        datetime: Date.now(),
        path: '/create',
        error: e
      });
      throw new InternalServerErrorException('An error occurred on our server in the creation of the person.');
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const {limit = +process.env.PAGINATION_LIMIT, offset = 0} = paginationDto;
    return await this.personRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: number) {
    const resultCompany =  await this.personRepository.findOneBy({id});
    if(!resultCompany)
      throw new NotFoundException(`Person with id ${id} not found`);
    return resultCompany;
  }

  async findOneByName(name: string) {
    const resultCompany =  await this.personRepository.findOneBy({fullName: name});
    if(!resultCompany)
      throw new NotFoundException(`Person with name ${name} not found`);
    return resultCompany;
  }

  async findOneByEmail(email: string) {
    const resultCompany =  await this.personRepository.findOneBy({mainEmail: email});
    if(!resultCompany)
      throw new NotFoundException(`Person with email ${email} not found`);
    return resultCompany;
  }

  async findOneByCC(cc: string) {
    const resultCompany =  await this.personRepository.findOneBy({identificationNumber: cc});
    if(!resultCompany)
      throw new NotFoundException(`Person with identification number ${cc} not found`);
    return resultCompany;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const personResult = await this.personRepository.preload({
      id: id,
      ...updatePersonDto
    });
    if(!personResult)
      throw new NotFoundException(`Person with id ${id} not found`);
    try{
      await this.personRepository.save(personResult);
    }catch (e) {
      this.logger.error({
        datetime: Date.now(),
        path: '/update',
        error: e
      });
      throw new InternalServerErrorException('An error occurred on our server in the update of the Person.');
    }
    return personResult;
  }

  async remove(id: number) {
    const companyFind = await this.findOne(id);
    return await this.personRepository.remove(companyFind);
  }
}
