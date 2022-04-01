//DADO
const valores = [4, 1, 2, 3, 4, 5]
const valores2 = [8, 7, 9, 12]


const cliente = {
    nome: 'Angelo Luz',
    cpf: '014.035.510.11',
    nascimento: '23/06/1986',
    telefone: '981560346',
    endereco: {
        rua: 'Avenida Javascript',
        cidade: 'Pelotas',
        estado: 'RS',
        pais: 'Brasil',
    },
};
//REST e SPREAD
//TODO: Pegar nome do cliente mas não descartar o resto
const {nome, ...resto} = cliente;
console.log('nome :', nome);
console.log('resto :', resto);
//TODO: função que soma N valores
function sum (...valores){
    return valores.reduce((acc, next) => acc + next);
}
console.log('summ(3,4) :', sum(3,4,4,5));
//TODO: Concatenando arrays
const arr = [...valores, ...valores2];
console.log('arr :', arr);

//TODO: Adiciona elemento no início de array
const arr2 = [99, ...valores, 88]
console.log('arr2 :', arr2);

//TODO: Função que recebe um array de valores, multiplica o primeiro por todos os outros
function x ([primeiro, ...resto]){
    return resto.map(v => v * primeiro)
}
console.log('x(valores) :', x(valores));
//TODO: Adiciona novo atributo no objeto cliente: updatedAt
const cli = {...cliente, updatedAt: new Date()}
console.log('cli :', cli);
//TODO: Altera o telefone do cliente para '11111111111'
const cli2 = {...cliente, telefone: '1111111111'}
console.log('cli2 :', cli2);
