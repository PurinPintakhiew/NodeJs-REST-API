const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../utils/GenerateAccessToken');

class AuthController {
    async login(req, res, next) {
        try {
            const email = req.body.email || "";
            const password = req.body.password || "";

            const user = await User.findOne({ where: { email: email } }) || null;
            if (user) {
                bcrypt.compare(password, user.password, async (err, result) => {
                    if (err) {
                        return res.status(500).json({
                            status: false,
                            error: err,
                        });
                    }
                    else if (result) {
                        const userData = { id: user.id, email: user.email };
                        const accessToken = generateAccessToken(userData);

                        const auth = await user.getAuth();
                        if (auth) {
                            auth.destroy();
                        }

                        const createAuth = await user.createAuth({ token: accessToken, userId: user.id });
                        if (createAuth) {
                            return res.status(200).json({
                                status: true,
                                apiToken: accessToken
                            });
                        }
                    }
                });
            } else {
                return res.status(404).json({
                    status: false,
                    error: 'Email not found'
                });
            }
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async register(req, res, next) {
        try {
            const { name = "", email = "", password = "" } = req.body;

            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(409).json({
                    status: false,
                    error: 'Email already in use'
                });
            }

            const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS, 10));
            const newUser = await User.create({ name, email, password: hashedPassword });

            if (newUser) {
                const userData = { id: newUser.id, email: newUser.email };
                const accessToken = generateAccessToken(userData);

                const createAuth = await newUser.createAuth({ token: accessToken, userId: newUser.id });
                if (createAuth) {
                    return res.status(200).json({
                        status: true,
                        apiToken: accessToken
                    });
                }
            }
        } catch (err) {
            console.error('Error in Register:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async logout(req, res, next) {
        try {

        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

module.exports = new AuthController();