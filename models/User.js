const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('../configs/database');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
        set(value) {
            const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
            const hashedPassword = bcrypt.hashSync(value, saltRounds);
            this.setDataValue('password', hashedPassword);
        },
    },
}, {
    timestamps: true,
});

User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;
