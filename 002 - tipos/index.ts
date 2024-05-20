let order: string = 'Pizza'
console.log(order)

order = 'McDonalds'
console.log(order)

let number: number = 10
console.log(number)
number = 20
console.log(number)

let deuErro: boolean = false
console.log(deuErro)
deuErro = true
console.log(deuErro)

const fun = (value: string) => {
  console.log('O typo any aceita qualquer typo:', value)
}

fun('Teste')

let times = ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos']
console.log(times)

let selecoes = ['Brasil', 'Argentina', 'Uruguai', 'Chile']
console.log(selecoes)

let Corinthians = { nome: 'Corinthians', estado: 'São Paulo' }
console.log(Corinthians)

console.log(
  'Union Types é uma forma que permite colocar 2 tipos em uma váriavel no Typescript'
)

let player = (msg: String): void => {
  console.log(msg)
}

// Optional
function printName(obj: { first: string; last?: string }) {
  console.log(obj.first)
  if (obj.last !== undefined) {
    console.log(obj.last)
  }
}
printName({ first: 'Bob' }) // Ok
printName({ first: 'Alice', last: 'Alisson' }) // Ok

// Never
function error(message: string): never {
  throw new Error(message)
}

// Aliases
type StringOrNumber = string | number
let sample: StringOrNumber
sample = 'test' // Ok
sample = 123 // Ok

// Union Types
let union: string | number
union = 'test' // Ok
union = 123 // Ok

// Void
function warnUser(): void {
  console.log('This is a warning message')
}
warnUser() // Ok

enum Color {
  Red,
  Green,
  Blue
}

console.log(Color)
