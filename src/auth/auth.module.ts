import { Module } from '@nestjs/common';
import { AuthService } from 'src/domain/service/auth.service';
import { AuthController } from 'src/api/controller/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
