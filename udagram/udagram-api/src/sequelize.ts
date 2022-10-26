import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "password",
  database: "postgres",
  host: "database-1.cgdvndqxx1xc.us-east-1.rds.amazonaws.com",
  
  dialect: "postgres",
  storage: ":memory:",
});
