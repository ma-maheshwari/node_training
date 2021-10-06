const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request made');
})
server.listen(9999,'localhost',()=>{
    console.log('Listening on port 9999');
})