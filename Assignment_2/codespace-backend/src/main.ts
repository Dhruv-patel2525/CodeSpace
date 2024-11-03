import { ValidationPipe } from '@nestjs/common';  // Import ValidationPipe
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strips properties that are not in the DTO
    forbidNonWhitelisted: true, // Returns error if extra properties are sent
    transform: true, // Automatically transforms payloads into DTO types
  }));
  
  await app.listen(3000);
}
bootstrap();