import { Test, TestingModule } from '@nestjs/testing';
import { TypesPersonsController } from './types-persons.controller';
import { TypesPersonsService } from './types-persons.service';

describe('TypesPersonsController', () => {
  let controller: TypesPersonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesPersonsController],
      providers: [TypesPersonsService],
    }).compile();

    controller = module.get<TypesPersonsController>(TypesPersonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
