// Biblioteca sequelize
const sequelize = require('sequelize');
// Conexão com banco
const sequelize2 = new sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    sequelize: sequelize,
    sequelize2: sequelize2
}