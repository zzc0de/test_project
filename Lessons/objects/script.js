const x = 10;
const y = 30;

const p = {x,y};
console.log(p);

//  rewrite default  info

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opt = {
    user: 'Alex',
    password: 'SecretPass'
};

const result = Object.assign({}, defaults, opt);
console.log(result);




const workInfo = {
    place: 1212,
    depart: 'IT',
    extNumber: 1260
};

const shallowCopy = Object.assign({}, workInfo);
workInfo.depart.push('Finance');
console.log(shallowCopy);
console.log(workInfo);

// Spread operator for objects

const locateInfoDefault = {
    city: 'Moscow',
    street: 'Novgoroskaya',
    numberHouse: 12
};

const userLocateInfo = {
    city: 'Ryazan',
    street: 'Udarnaya',
    numberHouse: 19
};

const res = { ...locateInfoDefault, ...userLocateInfo};
console.log(res);