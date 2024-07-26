import { Module } from '@nestjs/common';
import { AppController } from './api/controller/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mamacc446',
    database: 'api_node_nest',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
