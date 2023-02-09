
const Card = require('../models/card');

exports.readAmount = async (cardNumber, pin) => {
    try {
        const card = await Card.findOne({"cardNumber" : cardNumber, "pin" : pin});
    console.log(card);
    return card.amount;

    } catch (e) {
        throw e;
    }
    
}

exports.createCard = async (cardNumber, pin, status) => {
    try {
        const card = await Card.create({
            cardNumber : cardNumber,
            pin : pin,
            status : status,
            amount : 0
        });
        console.log(card);
        return card;

    } catch (e) {
        throw e;
    }
    
}



exports.createTrans = async (cardNumber, pin, amount) => {
    try {
        await Card.updateOne({"cardNumber": cardNumber, "pin": pin}, {$inc: {"amount" : amount}}, { upsert: true, runValidators: true });
        await Card.updateOne({"cardNumber": cardNumber, "pin": pin}, {$push: {"transactions" : {"transAmount" : amount}}}, { upsert: true, runValidators: true });
    
    const updatedCard = await Card.where("cardNumber").equals(cardNumber).where("pin").equals(pin);
    return updatedCard;

    } catch (e) {
        throw e;
    }
    
}

exports.readStatus = async (cardNumber, pin) => {
    try {
        const card = await Card.findOne({"cardNumber" : cardNumber, "pin" : pin});
    console.log(card);
    return card.status;
    } catch (e) {
        throw e;
    }
    
}