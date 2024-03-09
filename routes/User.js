const express = require('express');

// controller
const UserController = require('../controllers/UserController');


// validate
const Validator = require('../validations/Validator');
const UserValidate = require('../validations/validates/UserValidate');

const router = express.Router();

router.get('/users', UserController.getAll);
router.put('/users/:id', UserValidate.update, Validator, UserController.update);
router.delete('/users/:id', UserValidate.destroy, Validator, UserController.destroy);

module.exports = router;
