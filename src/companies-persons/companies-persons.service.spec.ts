import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesPersonsService } from './companies-persons.service';

describe('CompaniesPersonsService', () => {
  let service: CompaniesPersonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompaniesPersonsService],
    }).compile();

    service = module.get<CompaniesPersonsService>(CompaniesPersonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
