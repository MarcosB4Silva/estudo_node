// * CRIANDO TABELA DO BANCO
// Fazendo requisição do banco
const db = require('./db');

// Tabela
const postTabela = db.sequelize2.define('postagens', {
    titulo: {
        type: db.sequelize.STRING
    },
    conteudo: {
        type: db.sequelize.TEXT
    }
})

// exportando tabela 
module.exports = postTabela;

/*
postTabela.sync({force:true})
// testando erro
.then(() => {
    console.log('tabela Criada com sucesso');
})
.catch((error) => {
    console.log('Erro ao criar tabela: ', error);
})
*/