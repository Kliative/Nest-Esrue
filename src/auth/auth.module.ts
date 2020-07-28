
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './services/auth.service';
import { jwtConstants } from 'src/util/constants';
@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret:' configService.get(JWT_SECRET)', // link to env or constant
                signOptions: { expiresIn: '60s' },
            })
        })
    ],
    providers: [
        AuthService
    ],
    exports: [
        AuthService
    ],
})
export class AuthModule { }
