import { Avaliation } from './../../database/entities/Avaliation.entity';
import { Module } from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliationController } from './avaliation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliation])],
  providers: [AvaliationService],
  controllers: [AvaliationController],
})
export class AvaliationModule {}
