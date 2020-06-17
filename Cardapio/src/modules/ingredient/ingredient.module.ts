import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';

@Module({
  providers: [IngredientService]
})
export class IngredientModule {}
