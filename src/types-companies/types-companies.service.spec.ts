import { Test, TestingModule } from '@nestjs/testing';
import { TypesCompaniesService } from './types-companies.service';

describe('TypesCompaniesService', () => {
  let service: TypesCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesCompaniesService],
    }).compile();

    service = module.get<TypesCompaniesService>(TypesCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
