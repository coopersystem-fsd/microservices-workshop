import { Avaliation } from './../../database/entities/Avaliation.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { AvaliationService } from './avaliation.service';

@Controller('avaliation')
@ApiTags('Avaliation')
@Crud({
  model: {
    type: Avaliation,
  },
})
export class AvaliationController implements CrudController<Avaliation> {
  constructor(public service: AvaliationService) {}
}
