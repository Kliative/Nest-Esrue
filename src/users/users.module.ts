import { Module, HttpModule } from '@nestjs/common';
import { UsersService } from './services/users.service';

@Module({
    imports: [HttpModule],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
