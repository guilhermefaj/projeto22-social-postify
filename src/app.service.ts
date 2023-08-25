import { Get, HttpCode, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHealth(): string {
    return "I'm okay!";
  }
}
