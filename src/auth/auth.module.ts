import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from '../api/controllers/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
