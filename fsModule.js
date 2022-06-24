const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err,data)=>{
    console.log(err, data) 
})



 console.log("Fineshed reading file")

//  in this console.log("Fineshed reading file") will print because 
// fs.readFile('file.txt', 'utf8', (err,data) take some time to reffer and run the output so till then work should not stop thats y it will print. the further data
// will be executed because it works on non-blocking I/O Module

