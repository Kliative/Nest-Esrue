import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    // Generate 
    async generateJWT(user: any) {
        const payload = await { user: user };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
