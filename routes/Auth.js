const express = require('express');

// controller
const AuthController = require('../controllers/AuthController');

// validate
const Validator = require('../validations/Validator');
const AuthValidate = require('../validations/validates/AuthValidate');

const router = express.Router();

router.post('/login', AuthValidate.login, Validator, AuthController.login);
router.post('/register', AuthValidate.register, Validator, AuthController.register);

module.exports = router;