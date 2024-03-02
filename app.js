require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

// cors
const cors = require('./config/cors');

// database
const db = require('./config/database');
require('./models/Relationships');

// route
const AuthRoute = require('./routes/Auth');

// controller
const ErrorController = require('./controller/ErrorrController');

const app = express();
app.use(express.json());
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', AuthRoute);

app.use(ErrorController.get404)

db.sync()
    .then((result) => {
        app.listen(8080)
    }).catch((err) => {
        console.log(err);
    });