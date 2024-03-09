const { body, param } = require('express-validator');

exports.show = [
    param('id', 'This product id is not null').notEmpty(),
];

exports.store = [
    body('name', 'This name is not null').notEmpty(),
    body('price', 'This price is not null').notEmpty(),
    body('qty', 'This qty is not null').notEmpty(),
];

exports.update = [
    param('id', 'This product id is not null').notEmpty(),
    body('name', 'This name is not null').notEmpty(),
    body('price', 'This price is not null').notEmpty(),
    body('qty', 'This qty is not null').notEmpty(),
];


exports.destroy = [
    param('id', 'This product id is not null').notEmpty(),
];