import { Test, TestingModule } from '@nestjs/testing';
import { PlatesController } from './plates.controller';

describe('Plates Controller', () => {
  let controller: PlatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatesController],
    }).compile();

    controller = module.get<PlatesController>(PlatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
