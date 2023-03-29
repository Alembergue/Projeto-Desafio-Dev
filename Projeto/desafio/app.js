//nodeJS nodemon

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cadastro = require("./models/cadastro")

app.use(express.static('design')) // carregar css/java no nodejs

app.use(bodyParser.urlencoded({ extended: false }))

//parse aplication jason
app.use(bodyParser.json())

// Rotas
app.get("/", function(req, res){
   res.sendFile(__dirname + "/design/formulario.html"); // colocar endereço do arquivo
});

//Adicionar dados no sql
app.post('/add-dados', function(req, res){
   cadastro.create({
      Name: req.body.Name,
      Email: req.body.Email,
      CPF: req.body.CPF,
      Phone: req.body.Phone,
      Date: req.body.Date

   }).then(function(){
      //res.redirect('/sucesso') Apenas teste
      res.send("Cadastro realizado com sucesso!")
   }).catch(function(erro){
      res.send("[Error] - Cadastro não realizado [O email cadastrado já existe no banco de dados , tente com  outro endereço valido]")
      //res.send("[Error] - Cadastro não realizado [O email cadastrado já existe no banco de dados]" + erro) mostrando o log de error
   })

    //res.send("Nome:" + req.body.Name) teste de verficiaçãos se esta funcionando
});

//localhost:8080
app.listen(8080);

