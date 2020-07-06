// деструкторизация для объектоа

const person = {
    firstName: 'Alex',
    lastName: 'Bart',
    age: 37
};

const {firstName, lastName, age} = person;
console.log(firstName, lastName, age);



const person = {
    name: {
        first: 'Alex',
        last: 'Bart'
    },
    age: 37,
    role: 'programmer'
};
const { name: {first: firstName, last: lastName}, age }= person;
console.log(firstName, lastName, age);

const { permission: {role = 'user'} = {} } = person;
console.log(role);



function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest' } = {}) {
     console.log(user, port, host);
}
connect();
connect({port: 1111});


const dict = {
    dog: 'gavgav',
    elephan: 'uuuuu',
    mouse: 'piiii'
}
const {dog, ...otherAnimals } = dict;
console.log(otherAnimals);

// деструкторизация для массивов

const fib = [1, 2, 3, 4, 5, 6, 7,];
const [a, b, c] = fib;
console.log(a, b, c);

const fib = [1, 2, 3, 4, 5, 6, 7,];
const [, a, , b] = fib;
console.log(a, b);

const line = [[10, 12], [33, 57]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);

const people = ['alex', 'sandra'];
const [a, b, c = 'another'] = people;
console.log(a, b, c);


const people = ['chris', 'sandra', 'bob', 'alex'];
const [a, ...others] = people;
console.log(others);
