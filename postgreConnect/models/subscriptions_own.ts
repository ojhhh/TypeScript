import { Sequelize, DataType, Model, DataTypes } from "sequelize";
import Subscriptions from "./subscriptions";

interface ownAttribute {
  user_email: string;
  subscriptions_id: number;
  amount: number;
}

class Subscriptions_own extends Model<ownAttribute> {
  static initModel(sequelize: Sequelize): typeof Subscriptions_own {
    Subscriptions_own.init(
      {
        user_email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subscriptions_id: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        amount: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "Subscriptions_own",
        tableName: "subscriptions_own",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
    return Subscriptions_own;
  }
  static associate() {
    Subscriptions_own.belongsTo(Subscriptions, {
      foreignKey: "subscriptions_id",
    });
  }
}

export default Subscriptions_own;
