import { config } from "dotenv";

import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import * as helmet from "helmet";

config({
  path: __dirname,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("v1/api");
  app.use(helmet());
  app.enableCors({ origin: "*" });

  const options = new DocumentBuilder()
    .setTitle("Menu Service")
    .setDescription("Menu service for microservices workshop from Coopersystem")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("v1/api/docs", app, document);
  await app.listen(process.env.PORT);
  new Logger().log(`Listen on http://localhost:${process.env.PORT}/v1/api`);
  new Logger().log(
    `Swagger on http://localhost:${process.env.PORT}/v1/api/docs`
  );
}
bootstrap();
