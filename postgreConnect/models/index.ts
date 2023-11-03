import { config } from "../config";

import { Sequelize } from "sequelize";
import Connect from "./connect";
import { Users, userInitModel } from "./users";

interface DB {
  sequelize: Sequelize;
  Connect: typeof Connect;
  Users: typeof Users;
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
  Users,
};

Connect.initModel(sequelize);
userInitModel(sequelize);

export default db;
