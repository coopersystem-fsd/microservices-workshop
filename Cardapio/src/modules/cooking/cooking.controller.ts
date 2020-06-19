import { ApiTags } from '@nestjs/swagger';
import { Cooking } from './../../database/entities/Cooking.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CookingService } from './cooking.service';

@Controller('cooking')
@ApiTags('Cooking')
@Crud({
  model: {
    type: Cooking,
  },
})
export class CookingController implements CrudController<Cooking> {
  constructor(public service: CookingService) {}
}
