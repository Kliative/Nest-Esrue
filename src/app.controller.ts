import { Controller, Request,Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/services/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { UsersService } from './users/services/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
    ) { }
  @Post('auth/login')
  async login(@Request() req: any): Promise<any> {
    return this.authService.generateJWT(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('users')
  getAllUsers(@Request() req) {
    this.userService.findAll().subscribe(req => {
      console.warn(req.data);
      return req.data;
    });

  }
}
