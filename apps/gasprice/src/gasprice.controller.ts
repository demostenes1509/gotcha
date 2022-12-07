import { CacheTTL, Controller, Get, Inject } from '@nestjs/common';
import { GaspriceService } from './gasprice.service';

@Controller()
export class GaspriceController {
  @Inject()
  private readonly gaspriceService: GaspriceService;

  @CacheTTL(10) // Let change price every second. Im using 10 just to verify is working properly
  @Get('/gas-price')
  getGasPrice(): number {
    return this.gaspriceService.getGasPrice();
  }
}
