const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.json([1, 2, 3, 4]);
});
//Vai retornar como mensagem em http://localhost:3000/ o array de numeros sinalizado a cima
app.listen(3000);
