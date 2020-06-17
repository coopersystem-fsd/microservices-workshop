import { Module } from '@nestjs/common';
import { PlatesController } from './plates.controller';
import { PlatesService } from './plates.service';

@Module({
  controllers: [PlatesController],
  providers: [PlatesService]
})
export class PlatesModule {}
