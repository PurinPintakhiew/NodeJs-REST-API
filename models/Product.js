const Sequelize = require('sequelize');
const db = require('../configs/database');

const Product = db.define('product', {
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
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true
});

module.exports = Product;
