import { config } from "../config";

import { Sequelize } from "sequelize";
import Connect from "./connect";
import { Users, userInitModel } from "./users";
import Subscriptions from "./subscriptions";
import Subscriptions_own from "./subscriptions_own";
import Real_estates from "./real_estates";
import Real_estates_own from "./real_estates_own";
import Subscription_application from "./subscription_application";
import Deposit_drawal from "./deposit_drawal";
import Dividends from "./dividends";
import Dividend_details from "./dividend_details";
import Notices from "./notices";

interface DB {
  sequelize: Sequelize;
  Connect: typeof Connect;
  Users: typeof Users;
  Subscriptions: typeof Subscriptions;
  Subscriptions_own: typeof Subscriptions_own;
  Real_estates: typeof Real_estates;
  Real_estates_own: typeof Real_estates_own;
  Subscription_application: typeof Subscription_application;
  Deposit_drawal: typeof Deposit_drawal;
  Dividends: typeof Dividends;
  Dividend_details: typeof Dividend_details;
  Notices: typeof Notices;
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
  Real_estates,
  Real_estates_own,
  Subscription_application,
  Deposit_drawal,
  Dividends,
  Dividend_details,
  Notices,
};

Connect.initModel(sequelize);
userInitModel(sequelize);
Subscriptions.initModel(sequelize);
Subscriptions_own.initModel(sequelize);
Real_estates.initModel(sequelize);
Subscription_application.initModel(sequelize);
Deposit_drawal.initModel(sequelize);
Dividends.initModel(sequelize);
Dividend_details.initModel(sequelize);
Notices.initModel(sequelize);
Real_estates_own.initModel(sequelize);

export default db;
