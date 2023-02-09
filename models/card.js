const mongoose = require("mongoose");

const transactionSchema = require("./Transactions");

const cardSchema = new mongoose.Schema({
    cardNumber : {
        type : Number,
        required : true,
        validate : {
            validator : v => String(v).length === 12,
            message : props => `${props.value} length is not equal to 12`
        }
    },
    pin : {
        type : Number,
        required : true,
        validate : {
            validator : v => String(v).length === 6,
            message : props => `${props.value} length is not equal to 6`
        }
    },
    status : {
        type: String,
        required : true
    },
    amount : {
        type : Number,
        validate : {
            validator : v => v <= 100000,
            message : props => `${props.value} exceeds the 1,00,000 limit`
        }
    },
    transactions : [transactionSchema]
});

module.exports = mongoose.model("Card", cardSchema);