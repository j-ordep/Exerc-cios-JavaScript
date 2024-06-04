// Jeito errado

const names = ['João', 'Maria', 'José', 'Pedro'];
const names2 = names;
names2.push('Ana');

console.log(names);
console.log(names2);

/*

Se você der um log nos 2, verá que o nome "Ana" também apareceu no primeiro array. 
Isso pq, novamente, você está operando sobre o mesmo array. O "=" apenas referenciou ele em uma outra constante, mas ainda é o mesmo objeto.

*/

// A solução é usar o spread:

const Names = ['João', 'Maria', 'José', 'Pedro'];
const Names2 = [...Names];
Names2.push('Ana');

console.log(Names);
console.log(Names2);