import { Get, Controller, Res, Render, Post, Body } from '@nestjs/common';
// import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Render('index')
  // index() {
    //   return { message: 'hello' }
    // }

  // @Get('login')
  // @Render('login')
  // index(@Res() res: Response) {
  //   return { message: 'Hello world!' }
  //   // return res.render(
  //   //   'login',
  //   //   { message: 'Hello world!' },
  //   // );
  // }

  // @Post('signin')
  // signin(@Body() body) {
  //   console.log('signin', body)
  // }
}
