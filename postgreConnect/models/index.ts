import { config } from "../config";

import { Sequelize } from "sequelize";
import Connect from "./connect";
import { Users, userInitModel } from "./users";
import Subscriptions from "./subscriptions";
import Subscriptions_own from "./subscriptions_own";

interface DB {
  sequelize: Sequelize;
  Connect: typeof Connect;
  Users: typeof Users;
  Subscriptions: typeof Subscriptions;
  Subscriptions_own: typeof Subscriptions_own;
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
  Subscriptions,
  Subscriptions_own,
};

Connect.initModel(sequelize);
userInitModel(sequelize);
Subscriptions.initModel(sequelize);
Subscriptions_own.initModel(sequelize);

export default db;
