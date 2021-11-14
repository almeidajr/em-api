import { Injectable } from '@nestjs/common';

import { CreateNfceDto } from './dto/create-nfce.dto';
import { UpdateNfceDto } from './dto/update-nfce.dto';

@Injectable()
export class NfcesService {
  create(createNfceDto: CreateNfceDto) {
    return 'This action adds a new nfce';
  }

  findAll() {
    return `This action returns all nfces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nfce`;
  }

  update(id: number, updateNfceDto: UpdateNfceDto) {
    return `This action updates a #${id} nfce`;
  }

  remove(id: number) {
    return `This action removes a #${id} nfce`;
  }
}
