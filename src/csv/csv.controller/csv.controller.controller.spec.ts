import { Test, TestingModule } from '@nestjs/testing';
import { CsvControllerController } from './csv.controller.controller.js';

describe('CsvControllerController', () => {
  let controller: CsvControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvControllerController],
    }).compile();

    controller = module.get<CsvControllerController>(CsvControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
