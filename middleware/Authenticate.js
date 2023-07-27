const jwt = require('jsonwebtoken');

const Authenticate = (req, res, next) => {
    const authorization = req.headers['authorization'];
    if (authorization) {
        const token = authorization.split(' ')[1];
        if (token === null) return res.status(404).json({ status: false, error: 'Token is null' });
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
            if (err) return res.status(403).json({ status: false, error: err });
            next();
        });
    } else {
        return res.status(404).json({ status: false, error: 'authorization is null!' });
    }
}

module.exports = Authenticate;