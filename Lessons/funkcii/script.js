// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }
// showFirstMessage('Hello');
// console.log(num);


// function calc(a,b) {
//     return (a + b);
// }

let calc = (a,b) => a+b

console.log(calc(45,6));
console.log(calc(43, 45));

//----------------------------------

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);


let str = 'test';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());


let twelve = '12.2';
console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));


function sqr(x) {
    return x*x;
}
console.log(sqr(10));


const sq = (x, y) => x*y;
console.log(sq(4, 5));


const arr = [23, 45, 66, 78, 99, 101];

const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0);
console.log(res);


const greeter = {
    greet: function (name) {
        console.log('Hello', name);
    },

    greetAll: function (names) {
        names.forEach((name) => {
            this.greet(name);
        });
    }
};
greeter.greetAll(['Bob', 'Mark', 'Peter']);



