import { PartialType } from '@nestjs/swagger';

import { CreateNfceDto } from './create-nfce.dto';

export class UpdateNfceDto extends PartialType(CreateNfceDto) {}
