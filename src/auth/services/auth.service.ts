import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, of } from 'rxjs';
const bcrypt = require('bcrypt');


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    async generateJWT(user: any) {
        const payload = await { user: user };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    hashPassword(password: string): Observable<string> {
        return from<string>(bcrypt.hash(password, 12));

    }

    comparePasswords(newPassword: string, passwortHash: string): Observable <any | boolean> {
        return of<any | boolean>(bcrypt.compare(newPassword, passwortHash));
    }

}
