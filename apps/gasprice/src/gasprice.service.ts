import { Injectable } from '@nestjs/common';

@Injectable()
export class GaspriceService {
  getGasPrice(): number {
    return this.getRandomInt(10); // No idea valid gas price range
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }
}
