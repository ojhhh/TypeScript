import { Sequelize, DataTypes, Model } from "sequelize";
import Subscriptions from "./subscriptions";
import Real_estates_own from "./real_estates_own";

interface real_estatesAttribute {
  subscriptions_id: number;
  real_estates_name: string;
  currentPrice: number;
  startPrice: number;
  value: BigInt;
}

class Real_estates extends Model<real_estatesAttribute> {
  static initModel(sequelize: Sequelize): typeof Real_estates {
    Real_estates.init(
      {
        subscriptions_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        real_estates_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        currentPrice: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        startPrice: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        value: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Real_estates",
        tableName: "real_estates",
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
    return Real_estates;
  }
  static associate() {
    Real_estates.belongsTo(Subscriptions, {
      foreignKey: "subscriptions_id",
    });
    Real_estates.hasMany(Real_estates_own, {
      sourceKey: "id",
      foreignKey: "real_estates_id",
    });
  }
}

export default Real_estates;
