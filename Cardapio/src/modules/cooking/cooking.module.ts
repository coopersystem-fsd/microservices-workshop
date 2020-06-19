import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CookingService } from './cooking.service';
import { CookingController } from './cooking.controller';
import { Cooking } from '../../database/entities/Cooking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cooking])],
  providers: [CookingService],
  controllers: [CookingController],
})
export class CookingModule {}
