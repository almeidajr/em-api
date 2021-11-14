import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateNfceDto } from './dto/create-nfce.dto';
import { UpdateNfceDto } from './dto/update-nfce.dto';
import { NfcesService } from './nfces.service';

@ApiTags('nfces')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('nfces')
export class NfcesController {
  constructor(private readonly nfcesService: NfcesService) {}

  @Post()
  create(@Body() createNfceDto: CreateNfceDto) {
    return this.nfcesService.create(createNfceDto);
  }

  @Get()
  findAll() {
    return this.nfcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nfcesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNfceDto: UpdateNfceDto) {
    return this.nfcesService.update(+id, updateNfceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nfcesService.remove(+id);
  }
}
