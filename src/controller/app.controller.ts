import { Controller, Get, Headers, Param, Query, UsePipes, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Logger from '../utils/Logger'
import { userDto } from '../model/userDto';
import { UsidPipe } from '../pipeTrans/UsidPipe'
import { RequestHeader } from '../decorator/RequestHeader'
import { UserDecorator } from '../decorator/UserDecorator'
import { LogMiddleware } from '../middleware/LogMiddleware'

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
