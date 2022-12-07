import { CacheTTL, Controller, Get, Inject } from '@nestjs/common';
import { CryptoGasPriceService } from './crypto-gas-price.service';

@Controller()
export class CryptoGasPriceController {
  @Inject()
  private readonly cryptoGasPriceService: CryptoGasPriceService;

  @CacheTTL(15)
  @Get('/gas-price')
  async getGasPrice(): Promise<number> {
    return this.cryptoGasPriceService.getGasPrice();
  }
}
