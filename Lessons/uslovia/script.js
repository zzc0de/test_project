if (2*5 == 8) {
    console.log('Its True!')
} else {
    console.log('Not is true!')
}


let num = 50;

if (num < 49) {
    console.log('Not is true')
} else if (num > 100) {
    console.log('Too much!')
} else {
    console.log('True!')
};

(num == 50) ? console.log('True!') : console.log('Not is true');

switch (num) {
    case num < 49:
        console.log('Not is true');
        break;
    case num > 100:
        console.log('Too much!');
        break;
    case 50:
        console.log('True!');
        break;
    default:
        console.log('Something went wrong!');
        break;
};