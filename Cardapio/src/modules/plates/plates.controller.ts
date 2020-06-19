import { Controller } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { CrudController, Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { Plate } from 'src/database/entities/Plate.entity';

@Controller('plate')
@ApiTags('Plate')
@Crud({
  model: {
    type: Plate,
  },
})
export class PlatesController implements CrudController<Plate> {
  constructor(public service: PlatesService) {}
}
