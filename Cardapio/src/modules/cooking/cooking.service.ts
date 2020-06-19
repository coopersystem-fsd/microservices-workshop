import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Cooking } from '../../database/entities/Cooking.entity';

@Injectable()
export class CookingService extends TypeOrmCrudService<Cooking> {
  constructor(@InjectRepository(Cooking) repo) {
    super(repo);
  }
}
