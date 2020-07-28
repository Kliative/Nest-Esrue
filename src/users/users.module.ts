import { Module, HttpModule } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
    imports: [HttpModule],
    controllers:[UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
