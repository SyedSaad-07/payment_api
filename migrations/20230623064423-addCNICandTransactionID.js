'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Payments','CNIC',{
        type: Sequelize.STRING,
        allowNull:false,
      }),
      queryInterface.addColumn('Payments','Transaction_ID',{
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true
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
