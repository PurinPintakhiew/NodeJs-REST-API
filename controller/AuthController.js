const User = require('../models/User');
const Auth = require('../models/Auth');
const { where } = require('sequelize');
const bcrypt = require('bcryptjs');

exports.Login = async (req, res, next) => {
    try {
        const email = req.body.email || "";
        const password = req.body.password || "";

        const user = await User.findOne({ where: { email: email } }) || null;
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        status: false,
                        error: err,
                    });
                }
                if (result) {
                    return res.status(200).json({
                        status: true,
                        data: user
                    });
                }
            });
        } else {
            return res.status(404).json({
                status: false,
                error: 'Email not found'
            });
        }
    } catch (err) {
        return res.status(500).json({
            status: false,
            error: `${err}`
        });
    }
}

exports.Register = async (req, res, next) => {
    try {
        const name = req.body.name || "";
        const email = req.body.email || "";
        const password = req.body.password || "";

        const users = await User.findAll({ where: email }) || null;
        if (users.length > 0) {
            return res.status(409).json({
                status: false,
                error: 'Email already in use'
            });
        } else {
            bcrypt.hash()
        }


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