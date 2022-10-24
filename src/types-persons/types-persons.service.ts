import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TypesPerson} from "./entities/types-person.entity";

@Injectable()
export class TypesPersonsService {

  private readonly logger = new Logger('TypesPersonsService');

  constructor(
      @InjectRepository(TypesPerson)
      private readonly typesPersonRepository: Repository<TypesPerson>
  ) {}

  async findAll() {
    return await this.typesPersonRepository.find({});
  }

}
