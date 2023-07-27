const Sequelize = require('sequelize');
const db = require('../config/database');

const Auth = db.define('auth', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    token: Sequelize.TEXT
});

module.exports = Auth;