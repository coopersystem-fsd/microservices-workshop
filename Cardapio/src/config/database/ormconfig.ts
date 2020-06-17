// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import {resolve} from 'path';

const dir = resolve(__dirname, '..','..', '..');
console.log(dir);
const env = dotenv.parse(dir);
console.log(__dirname)
dotenv.config(env);
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ['dist/database/entities/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    entitiesDir: 'src/database/entities',
    migrationsDir: 'src/database/migrations',
  },
};

module.exports = config;
