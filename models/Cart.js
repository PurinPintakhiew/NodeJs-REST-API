const Sequelize = require('sequelize');
const db = require('../configs/database');
const User = require('./User'); // Import the User model

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

Cart.hasOne(User, { foreignKey: 'userId', onDelete: 'cascade' });
User.belongsTo(Cart, { foreignKey: 'userId' });

module.exports = Cart;
