import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: (config.password as string),
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});
