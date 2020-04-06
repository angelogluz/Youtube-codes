const faker = require('faker');

faker.locale = 'pt_BR';
const clients = []; //Cria o Array "clients" para guardar os clientes.

//Dados do cliente. Nome, email, número de telefone e data de nascimento.
for (let index = 0; index < 10; index++) {
    const name = faker.name.findName();
    const email = faker.internet.email(name);
    const phoneNumber = faker.phone.phoneNumber();
    const birth = faker.date.past(30, 2000);

    client = {
        name,
        email,
        phoneNumber,
        birth,
    }
//Puxa os dados do cliente.
    clients.push(client);
}
//Printa os dados do cliente no console.
console.log(clients);
