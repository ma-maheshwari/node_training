const { readFile,writeFile } = require("fs");

readFile("./buffer.js",(err, data) => {
  console.log('data',data);
  console.log("err", err);
});

writeFile('./test.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('Saved!');
});