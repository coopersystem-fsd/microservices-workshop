import { Test, TestingModule } from '@nestjs/testing';
import { IngredientController } from './ingredient.controller';

describe('Ingredient Controller', () => {
  let controller: IngredientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientController],
    }).compile();

    controller = module.get<IngredientController>(IngredientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
