import { Test, TestingModule } from '@nestjs/testing';
import { PlatesService } from './plates.service';

describe('PlatesService', () => {
  let service: PlatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatesService],
    }).compile();

    service = module.get<PlatesService>(PlatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
