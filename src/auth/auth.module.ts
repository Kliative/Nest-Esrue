
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './services/auth.service';
import { jwtConstants } from 'src/util/constants';
import { JwtStrategy } from './guards/jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth.controller';
@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            // dont store here in real app
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        JwtStrategy,
    ],
    exports: [
        AuthService
    ],
})
export class AuthModule { }
