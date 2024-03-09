const express = require('express');

// controller
const ProductController = require('../controllers/ProductController');


// validate
const Validator = require('../validations/Validator');
const ProductValidate = require('../validations/validates/ProductValidate');

const router = express.Router();

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductValidate.show, Validator, ProductController.show);
router.post('/products', ProductValidate.store, Validator, ProductController.store);
router.put('/products/:id', ProductValidate.update, Validator, ProductController.update);
router.delete('/products/:id', ProductValidate.destroy, Validator, ProductController.destroy);

module.exports = router;
