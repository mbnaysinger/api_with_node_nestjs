import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './api/controller/app.controller';
import { AppService } from './domain/service/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World2!"', () => {
      expect(appController.getHello()).toBe('Hello World2!');
    });
  });
});
