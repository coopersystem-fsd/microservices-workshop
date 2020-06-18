import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Plate } from 'src/database/entities/Plate.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class PlatesService extends TypeOrmCrudService<Plate> {
  constructor(@InjectRepository(Plate)  repo: Repository<Plate>) {
    super(repo);
  }
}