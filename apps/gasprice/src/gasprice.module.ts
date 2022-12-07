import { cacheConfig } from '@app/library/config';
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GaspriceController } from './gasprice.controller';
import { GaspriceService } from './gasprice.service';

@Module({
  imports: [CacheModule.register(cacheConfig)],
  controllers: [GaspriceController],
  providers: [
    GaspriceService,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class GaspriceModule {}
