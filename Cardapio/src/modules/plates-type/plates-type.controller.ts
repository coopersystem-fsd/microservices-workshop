import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { PlateType } from 'src/database/entities/PlateType.entity';
import { ApiTags } from '@nestjs/swagger';
import { PlatesTypeService } from './plates-type.service';

@Controller('plates-type')
@ApiTags('PlatesType')
@Crud({
  model: {
    type: PlateType,
  },
})
export class PlatesTypeController implements CrudController<PlateType> {
  constructor(public service: PlatesTypeService) {}
}
