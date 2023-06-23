const { Payment } = require("../models");
const {Op} = require('sequelize');
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

async function generateTransactionID(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const Transaction = async (req, res) => {
    const { amount, email, CNIC_num, m_number, acc_num, bank_name, currency } = req.body;

    try {
        const transactionID = await generateTransactionID(15);
        const currentDate = new Date(); // Get the current date
        currentDate.setHours(0, 0, 0, 0);

        const newTransaction = await Payment.create({ Amount: amount, EmailAddress: email, CNIC: CNIC_num, MobileNumber: m_number, Account_Number: acc_num, Bank_Name: bank_name, Transaction_ID: transactionID, DateTime: currentDate });
        await newTransaction.save();

        return res.status(200).json({
            "status": "OK",
            "message": "Transaction Completed"
        })
    } catch (error) {
        return res.status(500).json({
            "error":error
            // "error": "Transaction InCompleted"
        })
    }
}

const TransactionDetail = async(req, res) => {
    const {CNIC, email} = req.query;
    try {
        const data = await Payment.findAll({where:{
            [Op.and]: [{CNIC: CNIC}, {EmailAddress:email}]
        }
        })
        return res.status(200).json({
            data
        })
    } catch (error) {
        return res.status(500).json({
            "error":error
        })
    }
}

module.exports = {
    Transaction,
    TransactionDetail
}