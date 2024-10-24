import { ValidationPipe } from '@nestjs/common';  // Import ValidationPipe
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strips properties that are not in the DTO
    forbidNonWhitelisted: true, // Returns error if extra properties are sent
    transform: true, // Automatically transforms payloads into DTO types
  }));

  await app.listen(3000);
}
bootstrap();