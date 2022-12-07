import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as getenv from 'getenv';
import { firstValueFrom } from 'rxjs';

const CRYPTO_GAS_PRICE_REMOTE_HOST = getenv('CRYPTO_GAS_PRICE_REMOTE_HOST');
const CRYPTO_GAS_PRICE_REMOTE_PORT = getenv.int('CRYPTO_GAS_PRICE_REMOTE_PORT');
const CRYPTO_GAS_PRICE_REMOTE_TIMEOUT = getenv.int(
  'CRYPTO_GAS_PRICE_REMOTE_TIMEOUT',
);

@Injectable()
export class CryptoGasPriceService {
  @Inject()
  private httpService: HttpService;

  async getGasPrice(): Promise<number> {
    const { data: gasPrice } = await firstValueFrom(
      this.httpService.get<number>('/gas-price', {
        baseURL: `http://${CRYPTO_GAS_PRICE_REMOTE_HOST}:${CRYPTO_GAS_PRICE_REMOTE_PORT}`,
        headers: {
          Connection: 'keep-alive',
        },
        timeout: CRYPTO_GAS_PRICE_REMOTE_TIMEOUT,
      }),
    );

    return gasPrice;
  }
}
