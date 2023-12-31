import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { config } from './config/config';

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: config.dialect,
  storage: ':memory:',
  // logging: (...msg: any) => console.log(msg),
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
} as Partial<SequelizeOptions>);
