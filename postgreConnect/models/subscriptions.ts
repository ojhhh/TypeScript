import { Sequelize, DataTypes, Model, Association } from "sequelize";
import { DB } from "models";

// typescirpt는 enum에 관한 지식이 없답니다
export enum status_enum {
  panding = "panding",
  start = "start",
  end = "end",
}

interface SubscriptionsAttribute {
  subscription_img: string;
  subscription_name: string;
  subscription_address: string;
  subscription_totalprice: number;
  subscription_totalsupply: number;
  subscription_description: Text;
  subscription_start_date: Date;
  subscription_end_date: Date;
  subscription_result_date: Date;
  subscription_building_date: Date;
  subscription_trading_start_date: Date;
  subscription_order_amount: number;
  subscription_offering_price: number;
  subscription_status: string;
  floors: string;
  purpose: string;
  mainpurpose: string;
  area: number;
  allare: number;
  buildarea: number;
  floorarea: number;
  completion: Date;
  stock_type: string;
  publisher: string;
}

class Subscriptions extends Model<SubscriptionsAttribute> {
  static initModel(sequelize: Sequelize): typeof Subscriptions {
    Subscriptions.init(
      {
        subscription_img: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subscription_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subscription_address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subscription_totalprice: {
          type: DataTypes.BIGINT,
          defaultValue: 0,
        },
        subscription_totalsupply: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        subscription_description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subscription_start_date: { type: DataTypes.DATE, allowNull: false },
        subscription_end_date: { type: DataTypes.DATE, allowNull: false },
        subscription_result_date: { type: DataTypes.DATE, allowNull: false },
        subscription_building_date: { type: DataTypes.DATE, allowNull: false },
        subscription_trading_start_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        subscription_order_amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        subscription_offering_price: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        subscription_status: {
          type: DataTypes.ENUM,
          values: ["pading", "start", "end"],
          allowNull: false,
        },
        floors: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        purpose: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mainpurpose: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        area: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        allare: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        buildarea: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        floorarea: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        completion: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        stock_type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        publisher: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Subscriptions",
        tableName: "subscriptions",
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
    return Subscriptions;
  }

  static associate(db: DB) {
    db.Subscriptions.hasMany(db.Subscriptions_own, {
      foreignKey: "subscriptions_id",
    });
    db.Subscriptions.hasMany(db.Real_estates, {
      foreignKey: "subscriptions_id",
    });
    db.Subscriptions.hasMany(db.Subscription_application, {
      foreignKey: "subscriptions_id",
    });
  }
}

export default Subscriptions;
