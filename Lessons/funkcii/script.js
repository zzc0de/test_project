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





