import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
export type User = any;
@Injectable()
export class UsersService {
    

    constructor(
        private httpService: HttpService
    ) {}

    findAll(): Observable<AxiosResponse<any[]>> {
        return this.httpService.get('https://jsonplaceholder.typicode.com/users');
    }


}

