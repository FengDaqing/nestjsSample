import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { userDto } from '../model/userDto';
import { UsidPipe } from '../pipe/UsidPipe'
import { RequestHeader } from '../decorator/RequestHeader'
import { UserDecorator } from '../decorator/UserDecorator'

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(
    @Query('city') city: string,
    @UserDecorator() user: userDto,
    @RequestHeader('userid', new UsidPipe()) userid: string,
    @Req() request: any):
    Promise<string> {
    console.log('your headers userId is--' + userid);
    console.log('your user name--' + user.userName);
    console.log(request.headers['userid'])
    return this.appService.getHello();
  }

  @Get("welcome")
  async Welcome(@Query('name') name: String) {
    return "welcome " + name;
  }
}
