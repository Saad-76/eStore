import { Module } from '@nestjs/common';

import { loggerService } from './logger.service';
import { LoggerController } from './logger.controller';

@Module({
  providers: [loggerService],
  exports: [loggerService],
  controllers: [LoggerController],
})
export class loggerModule {}
