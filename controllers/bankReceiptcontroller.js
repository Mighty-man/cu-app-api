const BankReceipt = require('../models/Bankreceipt');

module.exports = {
    index: async (req, res) => {
        const bankReceipts = await BankReceipt.find({})
        res.status(200).json(bankReceipts)

    },
    newBankReciept: async (req, res) => {
        const newBankReceipt = new BankReceipt(req.body);
            bankReceipt = await newBankReceipt.save();
        res.status(201).json(bankReceipt);
    },
 }
