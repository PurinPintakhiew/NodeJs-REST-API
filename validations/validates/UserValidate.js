const { body, param } = require('express-validator');

exports.show = [
    param('id', 'This user id is not null').notEmpty(),
];

exports.update = [
    body('name', 'This name is not null').notEmpty(),
];


exports.destroy = [
    param('id', 'This user id is not null').notEmpty(),
];