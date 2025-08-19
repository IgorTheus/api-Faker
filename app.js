const express = require("express");

const { faker } = require("@faker-js/faker");

const app = express();

const port = 3000;

faker.locale = "pt_BR";

let produtos = [];

app.get("/api/usuarios", (req, res) => {
  const quantidade = req.query.qtd || 5;

  const usuarios = [];

  for (let i = 0; i < quantidade; i++) {
    usuarios.push({
      id: faker.string.uuid(),         
      nome: faker.person.fullName(),  
      email: faker.internet.email(),    
      telefone: faker.phone.number()   
    });
  }

  res.json(usuarios);
});

app.get("/api/produtos", (req, res) => {
  const quantidade = req.query.qtd || 5;

  produtos = [];

  for (let i = 0; i < quantidade; i++) {
    produtos.push({
      id: faker.string.uuid(),                  
      nome: faker.commerce.productName(),        
      preco: faker.commerce.price(),             
      descricao: faker.commerce.productDescription() 
    });
  }
  res.json(produtos);
});

app.get("/api/produtos/categoria/:nome", (req, res) => {
  const categoria = req.params.nome;
  qntd = req.query.qtd || 5;
  produtos = [];

  for (let i = 0; i < qntd; i++) {
    produtos.push({
      id: faker.string.uuid(),                   
      nome: faker.commerce.productName(),        
      preco: faker.commerce.price(),             
      descricao: faker.commerce.productDescription(), 
      categoria: categoria 
    });
  }
  res.json(produtos);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
