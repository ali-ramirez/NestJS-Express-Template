import { Module } from '@nestjs/common';
import { HealthService } from './services/health.service';
import { HealthController } from './controller/health.controller';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
