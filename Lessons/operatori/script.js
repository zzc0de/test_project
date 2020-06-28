
console.log('Hello' + ' world!');
// string
console.log(typeof(4 + 'Hello'));
// string
console.log(typeof(4 + +'Hello'));
// number

let incr = 10,
    decr = 10;

console.log(++ incr);
console.log(--incr);
console.log(5%2);
console.log('2' == 2);
console.log('2' === 2);

let isChecked = true,
    isClose = true; //false --> false
//and
console.log(isChecked && isClose);
//or
console.log(isChecked || isClose);