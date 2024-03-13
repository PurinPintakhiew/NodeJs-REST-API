const Sequelize = require('sequelize');
const db = require('../configs/database');
const User = require('./User');

const Auth = db.define('auth', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    token: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
}, {
    timestamps: true,
});

User.hasOne(Auth, { foreignKey: 'userId', onDelete: 'cascade' });
Auth.belongsTo(User, { foreignKey: 'userId' });

module.exports = Auth;
