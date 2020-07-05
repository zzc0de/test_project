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


