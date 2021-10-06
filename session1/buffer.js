const { Buffer } = require('buffer');

const buf1 = Buffer.alloc(10);
console.log('buf1',buf1);
const buf2 = Buffer.alloc(10, 1);
console.log('Buf2',buf2.toString('hex'));

const buf = Buffer.from('hello world', 'utf8');
console.log('buf',buf.toString('hex'));