const Sequelize = require('sequelize');
const mySqlKey = require('./config');

module.exports = new Sequelize('travelagency', 'root', mySqlKey, {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
})