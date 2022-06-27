const http = require('http'); //Importing http
const port = process.env.PORT || 3000; //  process.env.port:- it will take whatever the port it is getting it will take
const server = http.createServer((req, res) =>{   //it is a method which is in the http module it will have callback function 
    res.statusCode = 200; //res:- responce Code will tell what happenen tothe responce each number have it's value like (200 for ok,500 for server error)
    res.setHeader('content-Type', 'text/html')// it tell about which type of content serve has sent other wise it will print in a plain text
    res.end('<h1> This is kiran</h1');





})
server.listen(port, () =>{
    console.log('server is listening on port ${port}');


});