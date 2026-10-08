import { Test, TestingModule } from '@nestjs/testing';
import { CsvController } from './csv.controller.js';

describe('CsvControllerController', () => {
  let controller: CsvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvController],
    }).compile();

    controller = module.get<CsvController>(CsvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
