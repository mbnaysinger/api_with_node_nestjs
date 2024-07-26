import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  await app.listen(3000);
}
bootstrap();
