'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    Amount: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    EmailAddress: {
      allowNull:false,
      type: DataTypes.STRING
    },
    CNIC: {
      allowNull:false,
      type: DataTypes.STRING
    },
    MobileNumber: {
      allowNull:false,
      type: DataTypes.STRING
    },
    Account_Number:{
      allowNull:false,
      type:DataTypes.STRING
    },
    Bank_Name:{
      allowNull:false,
      type:DataTypes.STRING,
    },
    Transaction_ID:{
      allowNull:false,
      type:DataTypes.STRING,      
      primaryKey:true
    },
    DateTime:{
      allowNull:false,
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};