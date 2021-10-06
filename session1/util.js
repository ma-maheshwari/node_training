const util = require('util');
const txt = 'My name is %s, My age is %d';
const result = util.format(txt, 'Manav', 21); 

console.log(result);
