const { body, param } = require('express-validator');

exports.show = [
    param('id', 'This product id is not null').notEmpty(),
];

exports.destroy = [
    param('id', 'This product id is not null').notEmpty(),
];