import { Module } from '@nestjs/common';
import { PlatesTypeService } from './plates-type.service';

@Module({
  providers: [PlatesTypeService]
})
export class PlatesTypeModule {}
