const counterObj = require('./script');

console.log(counterObj.getCounter());
counterObj.incrementCounter();
console.log(counterObj.getCounter());

const newCounterObj = require('./script');
console.log(newCounterObj.getCounter());