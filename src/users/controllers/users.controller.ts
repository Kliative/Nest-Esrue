import { Controller, UseGuards, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { first, map } from 'rxjs/operators';

@Controller()
export class UsersController {
    constructor(
    
        private readonly userService: UsersService
      ) { }
      
    @UseGuards(JwtAuthGuard)
    @Get('users')
    getAllUsers() {
      return this.userService.findAll().pipe(first(),
        map(response => response.data)
      );
  
    }
 }
