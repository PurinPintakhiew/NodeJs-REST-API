const User = require('../models/User');
const Auth = require('../models/Auth');

exports.Login = (req, res, next) => {
    try {
        const email = req.body.email;
        const pass = req.body.pass;

    } catch (err) {
        return res.status(500).json({
            status: false,
            error: err
        })
    }
}

exports.Register = (req, res, next) => {
    try {

    } catch (err) {
        return res.status(500).json({
            status: false,
            error: err
        })
    }
}

exports.Logout = (req, res, next) => {
    try {
    
    } catch (err) {
        return res.status(500).json({
            status: false,
            error: err
        })
    }
}