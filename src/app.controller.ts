import { Controller, Request,Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/services/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }
  @Post('auth/login')
  async login(@Request() req: any): Promise<any> {
    return this.authService.generateJWT(req.user);
  }

}
