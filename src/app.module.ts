import { UsersService } from './users/services/users.service';
import { AuthModule } from './auth/auth.module';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    HttpModule],
  controllers: [AppController],
  providers: [
    UsersService, AppService],
})
export class AppModule { }
