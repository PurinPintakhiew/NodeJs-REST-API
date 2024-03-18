const Sequelize = require('sequelize');
const db = require('../configs/database');

const CartItem = db.define('cartItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'carts',
            key: 'id'
        }
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
}, {
    timestamps: true,
});

module.exports = CartItem;