import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isProd = process.env.DEVELOPMENT_MODE === 'prod';
        return {
          type: 'postgres',
          host: configService.getOrThrow('DATABASE_HOST'),
          port: configService.getOrThrow('DATABASE_PORT'),
          username: configService.getOrThrow('DATABASE_USER'),
          password: configService.getOrThrow('DATABASE_PASSWORD'),
          database: configService.getOrThrow('DATABASE_NAME'),
          autoLoadEntities: true,
          synchronize: true,
        //   cli: {
        //     migrationsDir: 'src/migration',
        //   },
          ssl: isProd
            ? {
                rejectUnauthorized: false,
              }
            : false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
