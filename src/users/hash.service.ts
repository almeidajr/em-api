import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';

import { hashSalt } from '../settings/constants';

@Injectable()
export class HashService {
  async generate(payload: string) {
    return await hash(payload, hashSalt);
  }

  async compare(payload: string, hashed: string) {
    return await compare(payload, hashed);
  }
}
