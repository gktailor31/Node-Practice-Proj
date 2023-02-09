const cardRepo = require("../repositories/cardRepo");

exports.getAmount = async (req, res, next) => {
    try {
        const cardnumber = req.body.cardnumber;
        const pin = req.body.pin;
        const amount = await cardRepo.readAmount(cardnumber, pin);
        console.log(cardnumber + " " + pin);
        await res.json({
            "Amount" : amount
        });
    } catch (e) {
        await res.json({
            "Error" : e.message 
        })
    }
    
}

exports.postTransaction = async (req, res, next) => {
    try {
        const cardnumber = req.body.cardnumber;
    const pin = req.body.pin;
    const amount = req.body.amount;
    console.log(cardnumber + " " + pin + " " + amount);
    const amt = await cardRepo.readAmount(cardnumber, pin);
    if (amt + amount > 100000) throw new Error("Card limit Exceed 100000"); 
    const trans = await cardRepo.createTrans(cardnumber, pin, amount);
    await res.json(trans);
    } catch (e) {
        await res.json({
            "Error" : e.message 
        })
    }
    
}

exports.postCreateCard = async (req, res, next) => {
    try {
        const cardnumber = req.body.cardnumber;
    const pin = req.body.pin;
    const status = req.body.status;
    console.log(cardnumber + " " + pin);
    const card = await cardRepo.createCard(cardnumber, pin, status);
    await res.json({
        "Card Number" : card.cardNumber,
        "PIN" : card.pin,
        "Status" : card.status
    });
    } catch (e) {
        await res.json({
            "Error" : e.message 
        })
    }
    
}

exports.getStatus = async (req, res, next) => {
    try {
        const cardnumber = req.body.cardnumber;
        const pin = req.body.pin;
        console.log(cardnumber + " " + pin);
        const status = await cardRepo.readStatus(cardnumber, pin);
        await res.json({
            "Status" : status
        });
    } catch (e) {
        await res.json({
            "Error" : e.message 
        })
    }
    
}