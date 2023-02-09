const express = require('express');
const router = express.Router();
const cardController = require("../controllers/card");

// Routes

router.post("/get-amount", cardController.getAmount);
router.post("/create-card", cardController.postCreateCard);
router.post("/transaction", cardController.postTransaction);
router.post("/check-status", cardController.getStatus);

module.exports = router;