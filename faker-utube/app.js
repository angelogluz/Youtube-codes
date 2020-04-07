const faker = require('faker');

faker.locale = 'pt_BR';
const clients = [];


//Cria n clientes com os atributos nome, email, telefone e data de nascimento
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

    clients.push(client);
}

console.log(clients);
