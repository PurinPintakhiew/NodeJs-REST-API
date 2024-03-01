const express = require('express');

// controller
const AuthController = require('../controller/AuthController');

const router = express.Router();

router.post('/login', AuthController.Login);

module.exports = router;