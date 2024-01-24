"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Store, OrderItem }) {
      // define association here
      this.belongsTo(Store, {
        foreignKey: "storeId",
        as: "store",
      });

      this.hasMany(OrderItem, {
        foreignKey: "orderId",
        as: "orderItems",
      });
    }
  }
  Order.init(
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
      deliveryPrice: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      dateDue: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      additionalNote: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      storeId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM,
        values: ["notPaid", "pending", "success", "failed"],
        defaultValue: "notPaid",
        allowNull: false,
      },
      deliveryStatus: {
        type: DataTypes.ENUM,
        values: ["pending", "enroute", "delivered"],
        defaultValue: "pending",
        allowNull: false,
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "orders",
      modelName: "Order",
      paranoid: true,
    }
  );

  return Order;
};
