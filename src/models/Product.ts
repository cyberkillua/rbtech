"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Store }) {
      // define association here
      this.belongsTo(Store, {
        foreignKey: "storeId",
        as: "store",
      });
    }
  }
  Product.init(
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
      price: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
        allowNull: false,
      },
      isSoldOut: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      availableSize: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
        allowNull: false,
      },
      storeId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true, // This column can be null for active records
      },
    },
    {
      sequelize,
      tableName: "products",
      modelName: "Product",
      paranoid: true,
    }
  );

  return Product;
};
