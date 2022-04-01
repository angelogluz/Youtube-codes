let clients = [
    {name: 'Angelo Luz', birth: 1986, genre: 'M', purchaseDaysAgo: 10},
    {name: 'Chuck', birth: 1940, genre: 'M', purchaseDaysAgo: 5},
    {name: 'Sansa Stark', birth: 2002, genre: 'F', purchaseDaysAgo: 32},
    {name: 'Dean winchester', birth: 1982, genre: 'M', purchaseDaysAgo: 45},
    {name: 'Ragnar', birth: 1960, genre: 'M', purchaseDaysAgo: 25},
    {name: 'Elias Wojahn', birth: 1989, genre: 'M', purchaseDaysAgo: 15},
  ]

  let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
  console.log(ages);
  //TODO: Altera todos os valores em +1
  ages = ages.map(value => value+1);
  console.log('ages :', ages);

  ages.forEach(element => {
      console.log(element);
  });

  //TODO: Retorna todos os valores ímpares
  const impares = ages.filter(value => (value%2 === 1))
  console.log('impares :', impares);

  //TODO: Altera todos os valores ímpares para o próximo par
  ages = ages.map(value => (value % 2 === 1? value+1 : value));
  console.log('ages :', ages);

  //TODO: Cria um novo array com os valores menores do que 20 de numbers
  const menores = ages.filter( value => value < 20);
  console.log('menores :', menores);

  //TODO: Cria um novo array com os valores menores do que 17 e incrementar eles em um
  const menores2 = ages
        .filter(value => value < 17)
        .map(value => value+1);
  console.log('menores2 :', menores2);
  //TODO: Retorne a soma de todos os valores menores do que 20
  const somaMenores20 = ages
            .filter(value => value < 20)
            .reduce((acc, next) => (acc += next));
    console.log(somaMenores20);
    console.log('clients :', clients);
  //TODO: Incrementa em 1 o purchaseDaysAgo de todos objetos
    let newClients = clients.map(v => ({...v}))
     newClients = newClients.map(value => {
        value.purchaseDaysAgo+=1;
        return value;
    });
    console.log('newClients :', newClients);
  //TODO: Verifica se um determinado número de entrada está contigo no array
    console.log('ages.includes(19) :', ages.includes(18));
    console.log('ages.find(18) :', ages.find(v => v===19));
  //TODO: Altera array para ficar só com o primeiro nome dos clientes
    let nameClients = clients.map(value => value.name.split(" ")[0]);
    console.log('nameClients :', nameClients);
  //TODO: Incrementa a idade apenas dos clientes das posições ímpares do array
    clients
      .filter((value, index) => (index % 2 === 0 ? value.birth+=1 : value.birth) )
      console.log('xxx', clients);

  //TODO: Retorna quantos são do sexo masculino
  function buscarMens (clients) {
    if (clients.genre === 'M') 
    return clients;
}
let numberMens = clients.filter(buscarMens);

console.log(`Existem ${numberMens.length} homens.`);

  //TODO: Retorna todos as pessoas de sexo masculino
  let client = clients.filter(client => client.genre === "M");
  console.log(client);

