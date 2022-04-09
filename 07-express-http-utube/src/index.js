const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let clients = [
    {id: 3, nome: 'Angelo Luz', telefone: '53981560355'},
    {id: 1, nome: 'Maiara Luz', telefone: '53981560356'},
    {id: 2, nome: 'Helena Luz', telefone: '53981560357'},
    {id: 4, nome: 'Isadora Luz', telefone: '53981560358'},
]

function log (request, response, next){
    const {url, method} = request;
    console.log(`${method} - ${url} at ${new Date()}`)
    return next();
}
app.use(log)
/**
 * Retorna todos clientes em json
 */
app.get('/clients', (request, response) => response.status(200).json(clients))

/**
 * Buscar UM único recurso
 */
app.get('/clients/:id', (request, response) => {
    const {id} = request.params;
    const client = clients.find(value => value.id == id);
    if(client == undefined){
        response.status(400).json({error: 'Requisição inválida'});
    }else{
        response.status(200).json(client);
    }

    //response.json(clients.filter(value => value.id == request.params.id)))
})

/**
 * Inserir dados no servidor - BD
 */
app.post('/clients', (request, response) =>{
    const client = request.body;
    clients.push(client);
    response.status(201).json(client);
})

/**
 * Atualizar nome de clientes
 */
app.put('/clients/:id', (request, response) => {
    const id = request.params.id;
    const nome = request.body.nome;

    let client = clients.find(value => value.id == id);
    if(client == undefined){
        response.status(400).send();
    }else{
        client.nome = nome;
        response.status(200).json(client);
    }
})

app.delete('/clients/:id', (request, response) => {
    const {id} = request.params;
    const index = clients.findIndex(value => value.id == id);
    if(index == -1){
        response.status(400).send();
    }else{
        clients.splice(index,1);
        response.status(204).send();
    }

})

app.listen(3000);
