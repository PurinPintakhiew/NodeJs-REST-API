require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

// cors
const cors = require('./configs/cors');

// database
require('./models/Relationships');

// route
const AuthRoute = require('./routes/Auth');
const UserRoute = require('./routes/User');
const ProductRoute = require('./routes/Product');
const CartRoute = require('./routes/Cart');

// controller
const ErrorController = require('./controllers/ErrorController');

// middleware
const Middleware = require('./middlewares/Middleware');

const app = express();
app.use(express.json());
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', AuthRoute);
app.use('/api', Middleware, UserRoute);
app.use('/api', Middleware, ProductRoute);
app.use('/api', Middleware, CartRoute);

app.use(ErrorController.get404)

// port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
