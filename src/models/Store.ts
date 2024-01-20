"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate() {
      // define association here
    }
  }
  Store.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 6,
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "stores",
      modelName: "Store",
    }
  );

  return Store;
};
