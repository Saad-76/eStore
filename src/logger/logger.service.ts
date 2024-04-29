import { Injectable } from '@nestjs/common';
import { logger } from './wintson.config';

@Injectable()
export class loggerService {
  log(message: string, context?: string) {
    logger.info(message, { context });
  }

  error(message: string, trace: string, context?: string) {
    logger.error(message, { context, trace });
  }
}
