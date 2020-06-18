import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Ingredient } from 'src/database/entities/Ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService  extends TypeOrmCrudService<Ingredient> {
  constructor(@InjectRepository(Ingredient)  repo: Repository<Ingredient>) {
    super(repo);
  }
}