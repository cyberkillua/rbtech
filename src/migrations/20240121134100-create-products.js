"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(18, 2),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        allowNull: false,
      },
      isSoldOut: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      availableSize: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      numberSold: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      lastSold: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      storeId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
