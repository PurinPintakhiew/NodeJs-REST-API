const { validationResult } = require('express-validator');

const Validator = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        status: false,
        errors: extractedErrors,
    });
}

module.exports = Validator;