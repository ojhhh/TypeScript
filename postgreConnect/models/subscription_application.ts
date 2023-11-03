import { Sequelize, DataTypes, Model } from "sequelize";
import Subscriptions from "./subscriptions";

interface subscription_appAttribute {
  subsription_id: number;
  subscription_user_email: string;
  subscription_my_amount: number;
}

class Subscription_application extends Model<subscription_appAttribute> {
  static initModel(sequelize: Sequelize): typeof Subscription_application {
    Subscription_application.init(
      {
        subsription_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        subscription_user_email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subscription_my_amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Subscription_application",
        tableName: "subscription_application",
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
    return Subscription_application;
  }
  static associate() {
    Subscriptions.belongsTo(Subscription_application, {
      foreignKey: "subscriptions_id",
    });
  }
}

export default Subscription_application;
