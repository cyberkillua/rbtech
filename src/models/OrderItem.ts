"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order }) {
      // define association here
      this.belongsTo(Order, {
        foreignKey: "orderId",
        as: "order",
      });
    }
  }
  OrderItem.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productPrice: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "order_items",
      modelName: "OrderItem",
      paranoid: true,
    }
  );

  return OrderItem;
};
