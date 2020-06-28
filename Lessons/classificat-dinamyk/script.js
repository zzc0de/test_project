var number = 5;
var string = 'Hello!';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};


let persone = {
    name: 'ALex',
    age: 37,
    city: 'Moscow'
};
console.log(persone.name);


let images = ['red.jpg', 'green.jpg', 'yellow.png'];
console.log(images[0]);


console.log(typeof(String(4)));
console.log(typeof('www' + 5));
console.log(typeof(+'12'));
console.log(typeof(5 + +'5'));
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('Age 18?', 'Yes');


// let switcher = null;

// if (switcher) {
    // console.log('Not see you')
// };


let switcher = 1;

if (switcher) {
    console.log('See you')
};


console.log(typeof(Boolean('5')));
console.log(typeof(!!('5'))); 