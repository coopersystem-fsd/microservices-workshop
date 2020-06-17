import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from './config/database/ormconfig';
import { AuthMiddleware } from './core/middlewares/auth.middleware';
import { PlatesModule } from './modules/plates/plates.module';
import { PlatesController } from './modules/plates/plates.controller';

@Module({
  imports: [TypeOrmModule.forRoot(config), HttpModule, PlatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(PlatesController);
  }
}
