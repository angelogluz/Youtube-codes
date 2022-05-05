let clients = [
  {name: 'Angelo Luz', birth: 1986, genre: 'M', purchaseDaysAgo: 10},
  {name: 'Chuck', birth: 1940, genre: 'M', purchaseDaysAgo: 5},
  {name: 'Sansa Stark', birth: 2002, genre: 'F', purchaseDaysAgo: 32},
  {name: 'Dean winchester', birth: 1982, genre: 'M', purchaseDaysAgo: 45},
  {name: 'Ragnar', birth: 1960, genre: 'M', purchaseDaysAgo: 25},
  {name: 'Elias Wojahn', birth: 1989, genre: 'M', purchaseDaysAgo: 15},
]

let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
console.log('Idades :', ages);

//Altera todos os valores em +1
ages = ages.map(value => value+1);
console.log('Idades mais 1 :', ages);

ages.forEach(element => {
    console.log(element);
});


const odd = ages.filter(value => (value%2 === 1))
console.log('Ímpares :', odd);

//Altera todos os valores ímpares para o próximo par
ages = ages.map(value => (value % 2 === 1? value+1 : value));
console.log('Próximos pares de cada ímpar :', ages);

const minorsTwenty = ages.filter( value => value < 20);
console.log('Menores que 17 :', minorsTwenty);


const biggerTwenty = ages.filter(value => value > 20);
console.log('Maiores que 17 :', biggerTwenty)

//Incrementa um valor a todos menores de 17
const minorsSeventeenOnemore = ages
      .filter(value => value < 17)
      .map(value => value+1);
console.log('Menores que 17 com incremento de 1 valor :', minorsSeventeenOnemore);


const sumMinorsTwenty = ages
          .filter(value => value < 20)
          .reduce((acc, next) => (acc += next));
  console.log(sumMinorsTwenty);
  console.log('Soma dos menores de 20 :', sumMinorsTwenty);

//TODO: Incrementa em 1 o purchaseDaysAgo de todos objetos
  let newClients = clients.map(v => ({...v}))
   newClients = newClients.map(value => {
      value.purchaseDaysAgo+=1;
      return value;
  });
  console.log('newClients :', newClients);

//Verifica se um determinado número de entrada está contigo no array
  console.log('ages.includes(19) :', ages.includes(18));
  console.log('ages.find(18) :', ages.find(v => v===19));


  let firstNameClients = clients.map(value => value.name.split(" ")[0]);
  console.log('Primeiro nome dos clientes :', firstNameClients);

//Incrementa a idade apenas dos clientes das posições ímpares do array
  clients
    .filter((value, index) => (index % 2 === 0 ? value.birth+=1 : value.birth) )
    console.log('Incremento das idades ímpares', clients);

//Retorna quantos são do sexo masculino
function searchMens (clients) {
  if (clients.genre === 'M') 
  return clients;
}


let numberMens = clients.filter(searchMens);
console.log(`Existem ${numberMens.length} homens.`);


let mens = clients.filter(mens => mens.genre === "M");
console.log('Homens :', mens);