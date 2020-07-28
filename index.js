const express = require("express"); //Importando o Express
const app = express();  //Instanciando o express e passando como inicialização para a variável 'app'


app.get("/",function(req, res){
    res.send("<h3>Bem-vindo ao meu site!</h3>"); //resposta para a rota
}); //Criando uma Rota, passando um caminho e usando uma função req e res  

app.get("/blog", function(req,res){
    res.send("Parte Blog do meu site: www.github.com")
});

//Parametro de forma mais dinamica; http://localhost:4000/canal?canal=diskpizza
app.get("/canal", function(req,res){
    var canal = req.query['canal'];
    if (canal) {
        res.send("Canal do meu site é "+ canal );
    }else{
        res.send("Nenhum canal fornecido");
    }
});

//Parametros de forma mais estática; http://localhost:4000/ola/matheus
app.get("/ola/:nome/:empresa?", function(req,res){
    //REQ => DADOS ENVIADOS PELO USUÁRIO
    //RES => DADOS ENVIADOS AO USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    if(empresa){
        res.send('<h2> Oi '+nome+', desenvolvedor pela empresa '+empresa+'</h2>');
    }else{
        res.send('<h2> Oi '+nome+'</h2>');
    }
});



app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu um erro!');
    }else{
        console.log('Servidor iniciado com sucesso!');
    }
});