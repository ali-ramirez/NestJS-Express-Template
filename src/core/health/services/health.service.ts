import { HttpCode, Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  
  @HttpCode(200)
  findAll() {
    return `health Status Ok.!`;
  }
}
