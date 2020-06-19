import { Module } from '@nestjs/common';
import { PlatesTypeService } from './plates-type.service';
import { PlatesTypeController } from './plates-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlateType } from 'src/database/entities/PlateType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlateType])],
  providers: [PlatesTypeService],
  controllers: [PlatesTypeController]
})
export class PlatesTypeModule {}
