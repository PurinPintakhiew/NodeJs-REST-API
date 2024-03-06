const { where } = require("sequelize");
const User = require("../models/User");

exports.All = async (req, res, next) => {
    try {
        const users = await User.findAll();
        if (users) {
            return res.status(200).json({
                status: true,
                data: users
            });
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.Update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const name = req.body.name;

        const update = await User.update({ name: name }, { where: { id: id } });

        if (update) {
            return res.status(200).json({
                status: true,
                message: 'Update successful'
            });
        } else {
            return res.status(200).json({
                status: false,
                message: 'Update fail'
            });
        }

    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.destroy = async (req, res, next) => {
    try {
        const id = req.params.id;
        const destroy = await User.destroy({
            where: {
                id: id
            }
        })

        if (destroy) {
            return res.status(200).json({
                status: true,
                message: 'Destroy successful'
            });
        } else {
            return res.status(200).json({
                status: false,
                message: 'Destroy fail'
            });
        }

    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}