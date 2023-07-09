import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await TypeOrmModule.forRoot(config);
  await app.listen(3002);
}
bootstrap();
