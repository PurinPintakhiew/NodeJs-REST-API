const Sequelize = require('sequelize');
const db = require('../configs/database');
const User = require('./User');

const Cart = db.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
    },
}, {
    timestamps: true,
});

Cart.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
User.hasMany(Cart, { foreignKey: 'userId' });

module.exports = Cart;
