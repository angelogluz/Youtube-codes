const express = require ('express');

const app = express();

app.get('/', (request, response) => {
    response.json([1, 2, 3, 4, 5]); /* incremento e um item no array*/
})

app.listen(3000);
