import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NfcesModule } from './nfces/nfces.module';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          host: 'database',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          migrations: [__dirname + '/settings/migrations/*{.ts,.js}'],
        }),
    }),
    UsersModule,
    AuthModule,
    ShoppingListsModule,
    NfcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
