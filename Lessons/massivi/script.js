/*  найти максимальное число */
const arr = [1, 3, 5, 7, 8];
const result = Math.max(...arr);
console.log(result);


const arr = [1, 3, 5, 7, 8];
const arr2 = [12, 23, 57];
const result = Math.max(...arr, ...arr2);
console.log(result);


/* объединить массивы */
const massive1 = [1, 3, 5, 6];
const massive2 = [7, 45, 12, 678];

const shallowCopy = [...massive1, ...massive2];
console.log(shallowCopy);