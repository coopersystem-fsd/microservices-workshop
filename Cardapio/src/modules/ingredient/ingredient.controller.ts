import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Ingredient } from 'src/database/entities/Ingredient.entity';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
@ApiTags('Ingrediente')
@Crud({
  model: {
    type: Ingredient,
  },
})
export class IngredientController implements CrudController<Ingredient> {
  constructor(public service: IngredientService) {}
}
