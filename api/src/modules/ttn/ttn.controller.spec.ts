import { Test, TestingModule } from '@nestjs/testing';
import { TtnController } from './ttn.controller';

describe('TtnController', () => {
  let controller: TtnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TtnController],
    }).compile();

    controller = module.get<TtnController>(TtnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
