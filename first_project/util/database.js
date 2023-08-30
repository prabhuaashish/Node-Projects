const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'aashish', 'Aashish@99', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;