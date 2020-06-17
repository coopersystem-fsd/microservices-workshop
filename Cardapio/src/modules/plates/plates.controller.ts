import { Controller, Get } from '@nestjs/common';
import { PlatesService } from './plates.service';

@Controller('plates')
export class PlatesController {

  constructor(private plateService: PlatesService) {}
  
  @Get('')
  public async index() {
    return this.plateService;
  }
}
