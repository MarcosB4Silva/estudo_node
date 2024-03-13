// * BIBLIOTECAS:
// Biblioteca expess
var express = require('express');
const port = 8081;
const app = express();
// Importando body-parser
const bodyParser = require('body-parser'); // agiliza a conexão com o banco
// Importando Biblioteca handlebars
const handlebars = require('express-handlebars');
// Biblioteca sequelize
const sequelize = require('sequelize');

// Configurando body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando handlebars
app.engine('handlebars', handlebars.engine({ 
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view.engine', 'handlebars');

// requisição da minha tabela
const Post = require('./post');

// Conexão com banco
const sequelize2 = new sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

// Cria rota
app.get('/cad', function (req, res) {
    // pegando o que o usuario escreveu
    // res.render("Texto: " + req.body.titulo + "Conteudo: " + req.body.conteudo);
    res.render('formulario.handlebars');
});
// Rota para home
app.get('/', function (req, res) {
    Post.findAll({order: [['id', 'desc']]}).then(function (posts) {
        res.render('home.handlebars', { posts: posts })
    })
})
//  Rota com POST
app.post('/add', function (req, res) {
    // inserindo informações no banco
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
        res.send("post criado com sucesso");
    }).catch(function (erro) {
        res.send("Houve um erro:" + erro)
    })
});

// criando conexão do servidor na porta do protocolo http
app.listen(port, function () {
    console.log('servidor rodando no endereço http://localhost:8081');
});
