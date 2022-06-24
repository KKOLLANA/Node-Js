const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err,data)=>{
    console.log(err, data)
})

// const a = fs.readfilesync('file.txt')
// console.log(a.tostring()) 
// tostring is used to check the content in the file 


console.log("Fineshed reading file")

