import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // allow your frontend origin (or '*' for everything)
  app.enableCors({
    origin: '*',
    methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
    credentials: true,
  });

  await app.listen(8888);
  console.log(`🚀 API listening on http://localhost:8888`);
}
bootstrap();
