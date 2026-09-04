import { Test, TestingModule } from '@nestjs/testing';
import { DirectoresController } from './directores.controller';

describe('DirectoresController', () => {
  let controller: DirectoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectoresController],
    }).compile();

    controller = module.get<DirectoresController>(DirectoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
