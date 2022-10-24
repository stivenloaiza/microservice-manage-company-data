import { Test, TestingModule } from '@nestjs/testing';
import { TypesCompaniesController } from './types-companies.controller';
import { TypesCompaniesService } from './types-companies.service';

describe('TypesCompaniesController', () => {
  let controller: TypesCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesCompaniesController],
      providers: [TypesCompaniesService],
    }).compile();

    controller = module.get<TypesCompaniesController>(TypesCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
