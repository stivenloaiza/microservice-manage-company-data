import { Test, TestingModule } from '@nestjs/testing';
import { TypesPersonsService } from './types-persons.service';

describe('TypesPersonsService', () => {
  let service: TypesPersonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesPersonsService],
    }).compile();

    service = module.get<TypesPersonsService>(TypesPersonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
