import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlateType } from 'src/database/entities/PlateType.entity';

@Injectable()
export class PlatesTypeService  extends TypeOrmCrudService<PlateType> {
  constructor(@InjectRepository(PlateType)  repo: Repository<PlateType>) {
    super(repo);
  }
}