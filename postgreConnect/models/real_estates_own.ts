import { Sequelize, DataTypes, Model } from "sequelize";
import { DB } from "models";

interface real_estates_ownAttribute {
  user_email: string;
  real_estates_id: number;
  real_estates_name: string;
  price: number;
  amount: number;
  possible_quantity: number;
  token_name: string;
}

class Real_estates_own extends Model<real_estates_ownAttribute> {
  static initModel(sequelize: Sequelize): typeof Real_estates_own {
    Real_estates_own.init(
      {
        user_email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        real_estates_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        real_estates_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        possible_quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        token_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Real_estates_own",
        tableName: "real_estates_own",
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
    return Real_estates_own;
  }
  static associate(db: DB) {
    db.Real_estates_own.belongsTo(db.Real_estates, {
      foreignKey: "real_estates_id",
      targetKey: "id",
    });
  }
}

export default Real_estates_own;
