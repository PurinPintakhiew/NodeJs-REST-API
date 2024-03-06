const express = require('express');

// controller
const UserController = require('../controllers/UserController');


// validate
const Validator = require('../validations/Validator');
const UserValidate = require('../validations/validates/UserValidate');

const router = express.Router();

router.get('/users', UserController.All);
router.delete('/users/:id', UserValidate.destroy, Validator, UserController.destroy);

module.exports = router;
