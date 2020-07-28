import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('login')
  async login(@Request() req: any): Promise<any> {
    return this.authService.generateJWT(req.user);
  }
 }