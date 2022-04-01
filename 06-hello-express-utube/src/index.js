const express = require ('express');

const app = express();

app.get('/', (request, response) => {
    response.json([1, 2, 3, 4]);
})

// Porta onde o servidor estará em Escuta
app.listen(3000);
