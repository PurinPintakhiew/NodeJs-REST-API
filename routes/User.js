const express = require('express');

// controller
const UserController = require('../controllers/UserController');


// validate
const Validator = require('../validations/Validator');
const UserValidate = require('../validations/validates/UserValidate');

const router = express.Router();

router.get('/users', UserController.All);
router.put('/users/:id', UserValidate.update, Validator, UserController.Update);
router.delete('/users/:id', UserValidate.destroy, Validator, UserController.destroy);

module.exports = router;
