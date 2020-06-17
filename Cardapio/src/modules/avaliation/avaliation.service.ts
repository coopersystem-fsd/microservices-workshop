import { Avaliation } from './../../database/entities/Avaliation.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class AvaliationService extends TypeOrmCrudService<Avaliation> {
  constructor(@InjectRepository(Avaliation) repo) {
    super(repo);
  }
}
