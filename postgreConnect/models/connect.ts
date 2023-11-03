import { Model, DataTypes, Sequelize } from "sequelize";

interface ConnectAttributes {
  price: string;
  cnt: number;
}

class Connect extends Model<ConnectAttributes> {
  // ! 는 definitely assigned 마커로 나중에 값이 할당 된다는 것을 의미
  public price!: string;
  public cnt!: number;

  // Sequelize를 받는 대신, ModelAttributes와 InitOptions를 인자로 받음
  static initModel(sequelize: Sequelize): typeof Connect {
    Connect.init(
      {
        price: {
          type: DataTypes.STRING,
          defaultValue: "0",
        },
        cnt: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "Connect",
        tableName: "test_Connects",
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );

    return Connect;
  }
}

export default Connect;
