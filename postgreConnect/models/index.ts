import { config } from "../config";

import { Sequelize } from "sequelize";
import Connect from "./connect";

interface DB {
  sequelize: Sequelize;
  Connect: typeof Connect;
}

const sequelize = new Sequelize(
  config.dev.database!,
  config.dev.username!,
  config.dev.password!,
  {
    host: config.dev.host!,
    dialect: "postgres",
  }
);
const db: DB = {
  sequelize,
  Connect,
};

Connect.initModel(sequelize);

export default db;
