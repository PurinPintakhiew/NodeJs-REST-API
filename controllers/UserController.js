const User = require('../models/User');

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await User.findAll({ attributes: { exclude: ['password'] } });
            return res.status(200).json({
                status: true,
                data: users,
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async show(req, res, next) {
        try {
            const id = req.params.id;

            const user = await User.findOne({ where: { id: id }, attributes: { exclude: ['password'] } });
            if (user) {
                return res.status(200).json({
                    status: true,
                    data: user
                });
            } else {
                return res.status(404).json({
                    status: true,
                    data: user,
                    message: 'data is not found'
                });
            }
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id;
            const name = req.body.name;

            const [updatedRows] = await User.update({ name }, { where: { id } });

            if (updatedRows > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Update successful',
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Update fail',
                });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async destroy(req, res, next) {
        try {
            const id = req.params.id;
            const destroyedRows = await User.destroy({ where: { id } });

            if (destroyedRows > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Destroy successful',
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Destroy fail',
                });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new UserController();