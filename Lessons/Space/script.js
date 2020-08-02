'use strict';
const items = [
    { name: 'Bike', price: 500 },
    { name: 'Care', price: 10000 },
    { name: 'Jet', price: 9000 },
    { name: 'Cycle', price: 700 },
]

const toFilterItems = items.filter((item) => { return item.price <= 1000000; })
console.log(toFilterItems);