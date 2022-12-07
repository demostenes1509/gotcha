import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { CryptoGasPriceModule } from './crypto-gas-price.module';
import * as getenv from 'getenv';

const CRYPTO_GAS_PRICE_PORT = getenv.int('CRYPTO_GAS_PRICE_PORT'); // Throws an exception when var is missing. I love that.

async function bootstrap() {
  const app = await NestFactory.create(CryptoGasPriceModule);
  await app.listen(CRYPTO_GAS_PRICE_PORT);
}
bootstrap();
