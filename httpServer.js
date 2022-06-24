var http = require('http');

var fs = require('fs');

 http.createServer((req, res)=>{

     fs.readFile('file.txt',(err,data)=>{

         res.write(data);

         res.end();

     })

     console.log('server started..');

 }).listen(8081)