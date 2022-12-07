import { cacheConfig } from '@app/library/config';
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CryptoGasPriceController } from './crypto-gas-price.controller';
import { CryptoGasPriceService } from './crypto-gas-price.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CacheModule.register(cacheConfig), HttpModule],
  controllers: [CryptoGasPriceController],
  providers: [
    CryptoGasPriceService,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class CryptoGasPriceModule {}
