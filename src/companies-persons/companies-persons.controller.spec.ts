import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesPersonsController } from './companies-persons.controller';
import { CompaniesPersonsService } from './companies-persons.service';

describe('CompaniesPersonsController', () => {
  let controller: CompaniesPersonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesPersonsController],
      providers: [CompaniesPersonsService],
    }).compile();

    controller = module.get<CompaniesPersonsController>(CompaniesPersonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
