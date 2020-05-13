import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userDto } from 'src/model/userDto';

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
    const user: userDto = {
      userId: '123466',
      userName: 'daqing'
    }
    var map: { [key: string]: string; } = {
      "userid": "abcdefg"
    };
    const httpReqeust = {
      headers: map
    };
    it('should return "Hello World!"', () => {
      const result = appController.getHello('beijing', user, user.userId, httpReqeust).then(rst=>
        {
          console.log(result);
          expect(rst).toEqual('Hello World!');
        });  
    });
  });
});
