import { NestFactory } from '@nestjs/core';
import { AppModule } from './controller/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Global Ware
  //app.use(new LogMiddleware().use)
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
