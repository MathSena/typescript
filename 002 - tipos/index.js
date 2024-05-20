var order = 'Pizza';
console.log(order);
order = 'McDonalds';
console.log(order);
var number = 10;
console.log(number);
number = 20;
console.log(number);
var deuErro = false;
console.log(deuErro);
deuErro = true;
console.log(deuErro);
var fun = function (value) {
    console.log('O typo any aceita qualquer typo:', value);
};
fun('Teste');
var times = ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos'];
console.log(times);
var selecoes = ['Brasil', 'Argentina', 'Uruguai', 'Chile'];
console.log(selecoes);
var Corinthians = { nome: 'Corinthians', estado: 'São Paulo' };
console.log(Corinthians);
console.log('Union Types é uma forma que permite colocar 2 tipos em uma váriavel no Typescript');
var player = function (msg) {
    console.log(msg);
};
// Optional
function printName(obj) {
    console.log(obj.first);
    if (obj.last !== undefined) {
        console.log(obj.last);
    }
}
printName({ first: 'Bob' }); // Ok
printName({ first: 'Alice', last: 'Alisson' }); // Ok
// Never
function error(message) {
    throw new Error(message);
}
var sample;
sample = 'test'; // Ok
sample = 123; // Ok
// Union Types
var union;
union = 'test'; // Ok
union = 123; // Ok
// Void
function warnUser() {
    console.log('This is a warning message');
}
warnUser(); // Ok
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color);
