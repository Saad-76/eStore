import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';

const ENV_FILE_PATH = '.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
