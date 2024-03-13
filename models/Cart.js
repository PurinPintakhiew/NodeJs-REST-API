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
        }
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
});

// Define the relationship between Cart and User
Cart.hasOne(User, { foreignKey: 'userId', onDelete: 'cascade' });
User.belongsTo(Cart, { foreignKey: 'userId' });

module.exports = Cart;
