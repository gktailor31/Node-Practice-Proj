const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cardroute = require("./routes/card");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/carddb", () => {
    console.log("Connected to DB");
})

// const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cardroute);

app.listen(3000);

