import { CacheModuleOptions } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import * as getenv from 'getenv';

const REDIS_HOST = getenv('REDIS_HOST');
const REDIS_PORT = getenv.int('REDIS_PORT');

export const cacheConfig: CacheModuleOptions = {
  isGlobal: true,
  store: redisStore,
  host: REDIS_HOST,
  port: REDIS_PORT,
};
