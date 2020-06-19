import { Module } from '@nestjs/common';
import { PlatesController } from './plates.controller';
import { PlatesService } from './plates.service';
import { Plate } from 'src/database/entities/Plate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Plate])],
  controllers: [PlatesController],
  providers: [PlatesService]
})
export class PlatesModule {}
