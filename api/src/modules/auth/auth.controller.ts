import { Controller, Request, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/signin')
  async has(@Request() req) {
    return this.authService.signin({
      email: req.body.email,
      password: req.body.password
    });
  }
}
