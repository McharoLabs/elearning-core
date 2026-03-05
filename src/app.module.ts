import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDefaultConnection } from './database/dataSourceOptions';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    //   isGlobal: true,
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(getDefaultConnection()),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
