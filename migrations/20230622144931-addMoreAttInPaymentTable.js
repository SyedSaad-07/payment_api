'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Payments','Account_Number',{
        type: Sequelize.STRING,
        allowNull:false
      }),
      queryInterface.addColumn('Payments','Bank_Name',{
        type: Sequelize.STRING,
        allowNull:false
      }),
      queryInterface.addColumn('Payments','Transaction_ID',{
        type: Sequelize.STRING,
        allowNull:false
      }),
      queryInterface.addColumn('Payments','DateTime',{
        type: Sequelize.DATE,
        allowNull:false
      }),
    ])
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
