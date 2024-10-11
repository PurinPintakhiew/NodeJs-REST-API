const jwt = require('jsonwebtoken');
const Auth = require('../models/Auth');

class Middleware {
    constructor(options) {
        this.options = options || {};
    }

    authenticate(req, res, next) {
        const authorization = req.headers['authorization'];

        if (authorization) {
            const token = authorization.split(' ')[1];

            if (token === null) {
                return res.status(404).json({ status: false, error: 'Token is null' });
            }

            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
                if (err) {
                    return res.status(403).json({ status: false, error: err });
                }
                const auth = await Auth.findOne({ where: { userId: user?.id, token: token } }) || null;
                if (auth === null) {
                    return res.status(401).json({
                        status: false,
                        error: 'This token does not exist in the system.'
                    });
                } else {
                    next();
                }
            });
        } else {
            return res.status(404).json({ status: false, error: 'Authorization header is null!' });
        }
    }
}

const authenticationMiddleware = new Middleware();

module.exports = authenticationMiddleware.authenticate.bind(authenticationMiddleware);