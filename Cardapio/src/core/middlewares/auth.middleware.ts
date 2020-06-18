import {
  Injectable,
  NestMiddleware,
  HttpService,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private httpService: HttpService) {}

  async use(req, res: Response, next: Function) {
    const { data } = await this.httpService
      .get('https://api.github.com/users/lucasffm')
      .toPromise();

    req.user = data;

    if (!data) {
      throw new UnauthorizedException('Invalid Token');
    }
    next();
  }
}
