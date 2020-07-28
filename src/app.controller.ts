import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { UsersService } from './users/services/users.service';
import { User } from './users/user.model';
import { map, first } from 'rxjs/operators';

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
  getAllUsers() {
    return this.userService.findAll().pipe(first(),
      map(response => response.data)
    );

  }

}
