import { Test, TestingModule } from '@nestjs/testing';
import { ProductonorderService } from './productonorder.service';

describe('ProductonorderService', () => {
  let service: ProductonorderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductonorderService],
    }).compile();

    service = module.get<ProductonorderService>(ProductonorderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
