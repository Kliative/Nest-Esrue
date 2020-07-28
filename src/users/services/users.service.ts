import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { User } from '../user.model';

@Injectable()
export class UsersService {
    constructor(
        private httpService: HttpService
    ) {}

    findAll(): Observable<AxiosResponse<User[]>> {
        return this.httpService.get('https://jsonplaceholder.typicode.com/users');
    }


}

