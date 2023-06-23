'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      EmailAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      CNIC: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      MobileNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};