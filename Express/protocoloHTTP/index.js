// Biblioteca expess
var express = require('express');
const port = 8081;
const app = express();

/* Criando rotas:

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/produtos", function (req, res) {
    res.send("Confira nossos produtos");
});

app.get("/ola/:nome/:cargo/:idade", function (req, res) {
    res.send(`
        <h1>Olá ${req.params.nome}</h1>
        <br>
        <h2>
        Seu cargo é: ${req.params.cargo}
        <br>
        Sua idade é: ${req.params.idade}
        </h2>
        `);
});

*/


// Importando Biblioteca handlebars
const handlebars = require('express-handlebars');
// Biblioteca sequelize
const sequelize = require('sequelize'); // Importando sequelize
const sequelize2 = new sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

// Cria rota
app.get('/cad', function(req, res){
    res.render('formulario.handlebars');
});
//  Rota com POST
app.post('/add', function(req, res){
    res.send('formulario recebido');
});
// Configurando handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view.engine', 'handlebars');

// criando conexão do servidor na porta do protocolo http
app.listen(port, function () {
    console.log('servidor rodando no endereço http://localhost:8081');
});