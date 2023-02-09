const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    transAmount : {
        type : Number
    }
});

module.exports = transactionSchema;