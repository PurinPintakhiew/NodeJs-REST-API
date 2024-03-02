const { body } = require('express-validator');

exports.login = [
    body('email', 'This email is not null').notEmpty(),
    body('email', 'Type is not email').isEmail(),
    body('password', 'This password is not null').notEmpty(),
];

exports.register = [
    body('email', 'This email is not null').notEmpty(),
    body('email', 'Type is not email').isEmail(),
    body('password', 'This password is not null').notEmpty(),
];

exports.resetPassword = [
    body('email', 'This email is not null').notEmpty(),
    body('email', 'Type is not email').isEmail(),
    body('newpassword', 'This newpassword is not null').notEmpty(),
];