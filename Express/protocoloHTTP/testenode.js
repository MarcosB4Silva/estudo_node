const sequelize = require('sequelize'); // Importando sequelize
const sequelize2 = new sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

/*
* Teste de conexão com o banco
sequelize2.authenticate().then(function () {
    console.log("Conectado com sucesso");
}).catch(function (erro) {
    console.log("Falha ao conectar" + erro);
});
*/

// Criando uma tabela via sequelize
const Postagem = sequelize2.define('postagens', {
    titulo: {
        type: sequelize.STRING
    },
    conteudo: {
        type: sequelize.TEXT
    }
});

const Usuario = sequelize2.define('usuarios', {
    nome: {
        type: sequelize.STRING(100)
    },
    sobrenome: {
        type: sequelize.STRING(100)
    },
    idade: {
        type: sequelize.INTEGER
    },
    email: {
        type: sequelize.STRING(100)
    }
});

// Criação de tabela, só precisa ser execultado uma vez
// Postagem.sync({force:true});
// Usuario.sync({force:true});

// Passando dados para dentro da tabela
// Postagem.create({
//     titulo: "Promoção dias das mães",
//     conteudo: "No mês dos dia das mães todas as loja terão 50% de desconto nos esmaltes"
// });
// Usuario.create({
//     nome: "Marcos",
//     sobrenome: "Barros",
//     idade: 20,
//     email: "mb@gmail.com"
// });
