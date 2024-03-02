const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    try {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
        console.error(err)
    }
}

module.exports = { generateAccessToken };