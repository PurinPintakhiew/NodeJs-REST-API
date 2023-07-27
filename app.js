require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

// cors
const cors = require('./config/cors');

// database
const db = require('./config/database');

// route
const AuthRoute = require('./routes/Auth');

const app = express();
app.use(express.json());
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', AuthRoute);

db.sysc()
    .then((result) => {
        app.listen(8080)
    }).catch((err) => {
        console.log(err);
    });