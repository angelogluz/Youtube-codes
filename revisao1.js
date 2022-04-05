// let e const
{
    var a = 2
    let b = 3
    console.log(b) //certo
}

console.log(a)
//console.log(b) errado

//template string

const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destruturing
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: "ANA", idade: 9}
console.log(i, nome)