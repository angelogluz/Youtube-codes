let clients = [
    {name: 'Angelo Luz', birth: 1986, genre: 'M', purchaseDaysAgo: 10},
    {name: 'Chuck', birth: 1940, genre: 'M', purchaseDaysAgo: 5},
    {name: 'Sansa Stark', birth: 2002, genre: 'F', purchaseDaysAgo: 32},
    {name: 'Dean winchester', birth: 1982, genre: 'M', purchaseDaysAgo: 45},
    {name: 'Ragnar', birth: 1960, genre: 'M', purchaseDaysAgo: 25},
    {name: 'Elias Wojahn', birth: 1989, genre: 'M', purchaseDaysAgo: 15},
  ]

let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];

function getAgesAndPlusOne(ages){
  for (let i = 0; i < ages.length; i++) {
    console.log(ages[i] + 1);
  }
}

function getOddAges(ages){
  let oddAges = ages.filter(value => (value%2 == 1));
  console.log(oddAges);
}

function transformOddToEven(ages){
  let oddToEvenAges = ages.map(value => (value % 2 === 1? value+1 : value));
  console.log(oddToEvenAges);
}

function valueLessThanTwenty(ages){
  let agesLessTwenty = ages.filter( value => value < 20);
  console.log(agesLessTwenty);
}

function valueLessThanSeventeenPlusOne(ages){
  let agesLessSeventeen = ages.filter(value => value < 17).map(value => value + 1);
  console.log(agesLessSeventeen);
}

function sumValueLessThanTwenty(ages){
  let newAges = ages.filter( value => value < 20).reduce((acc, next) => (acc += next));
  console.log(newAges);
}

function getClientsAndPlusOnePurchaseDaysAgo(clients){
  let newClients = clients.map(v => ({...v}))
  newClients = newClients.map(value => {
    value.purchaseDaysAgo+=1;
    return console.log(value);
  });
}

function getFirstNameClients(clients){
  let nameClients = clients.map(value => value.name.split(" ")[0]);
  console.log(nameClients);
}

function getGenreMasculineClients(clients){
  let client = clients.filter(client => client.genre === "M");
  console.log(client);
}
