import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { GaspriceModule } from './gasprice.module';
import * as getenv from 'getenv';

const GASPRICE_PORT = getenv.int('GASPRICE_PORT'); // Throws an exception when var is missing. I love that.

async function bootstrap() {
  const app = await NestFactory.create(GaspriceModule);
  await app.listen(GASPRICE_PORT);
}
bootstrap();
