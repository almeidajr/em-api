import { Module } from '@nestjs/common';

import { NfcesController } from './nfces.controller';
import { NfcesService } from './nfces.service';

@Module({
  controllers: [NfcesController],
  providers: [NfcesService],
})
export class NfcesModule {}
