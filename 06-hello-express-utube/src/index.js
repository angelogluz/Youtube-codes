
const express = require ('express');

const app = express();

app.get('/', (request, response) => {
    response.json([1, 2, 3, 4]);
})

// Declara a porta localhost:3000
app.listen(3000);
