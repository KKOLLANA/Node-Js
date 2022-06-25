const fs = require('fs');

fs.writeFile('file2.txt',"This is kiran kumar", ()=>{
    console.log("Written to the file")

});



// writeFilesync

b = fs.writeFileSync('file2.txt',"This is kiran kumar")
console.log(b)
console.log("Finished reading file")
