//Nodejs nodemon

const db = require('./db')

//Adicionar dados no sql
const cadastro = db.sequelize.define('usuarios', {
    Name: {
        type: db.Sequelize.STRING
    },
    Email: {
        type: db.Sequelize.STRING
    },
    CPF: {
        type: db.Sequelize.STRING
    },
    Phone: {
        type: db.Sequelize.STRING
    },
    Date: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//usuarios.sync({force: true})

module.exports = cadastro