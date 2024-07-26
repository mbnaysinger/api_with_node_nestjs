import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config as configDotenv } from 'dotenv';

configDotenv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Configuração do Swagger
   const config = new DocumentBuilder()
   .setTitle('Minha API')
   .setDescription('Descrição da API')
   .setVersion('1.0')
   .addTag('tag')
   .build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);

  const port = process.env.PORT;
  await app.listen(port);
}
bootstrap();
