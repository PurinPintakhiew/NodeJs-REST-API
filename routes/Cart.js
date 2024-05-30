const express = require('express');

// controller
const CartController = require('../controllers/CartController');


// validate
const Validator = require('../validations/Validator');
const CartValidate = require('../validations/validates/CartValidate');

const router = express.Router();

router.get('/carts', CartController.getAll);
router.get('/carts/:id', CartValidate.show, Validator, CartController.show);

module.exports = router;
