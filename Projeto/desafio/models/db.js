//Nodejs nodemon

//Conexão com o banoc de dados

const Sequelize = require('sequelize')

const sequelize = new Sequelize('dados', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}