import { Test, TestingModule } from '@nestjs/testing';
import { ProductonorderController } from './productonorder.controller';
import { ProductonorderService } from './productonorder.service';

describe('ProductonorderController', () => {
  let controller: ProductonorderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductonorderController],
      providers: [ProductonorderService],
    }).compile();

    controller = module.get<ProductonorderController>(ProductonorderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
