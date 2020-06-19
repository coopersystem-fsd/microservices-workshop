import { Test, TestingModule } from '@nestjs/testing';
import { PlatesTypeService } from './plates-type.service';

describe('PlatesTypeService', () => {
  let service: PlatesTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatesTypeService],
    }).compile();

    service = module.get<PlatesTypeService>(PlatesTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
