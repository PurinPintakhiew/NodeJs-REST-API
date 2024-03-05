require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

// cors
const cors = require('./configs/cors');

// database
const db = require('./configs/database');
require('./models/Relationships');

// route
const AuthRoute = require('./routes/Auth');

// controller
const ErrorController = require('./controllers/ErrorrController');

const app = express();
app.use(express.json());
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', AuthRoute);

app.use(ErrorController.get404)

// port
app.listen(8080)
