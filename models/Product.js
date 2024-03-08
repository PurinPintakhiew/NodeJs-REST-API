const Sequelize = require('sequelize');
const db = require('../configs/database');

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.TEXT,
    price: Sequelize.DOUBLE,
    qty: Sequelize.INTEGER,
});

module.exports = Product;