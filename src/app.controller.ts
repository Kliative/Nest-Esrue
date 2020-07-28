import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { UsersService } from './users/services/users.service';
import { User } from './users/models/user.model';
import { map, first } from 'rxjs/operators';

@Controller()
export class AppController {}
