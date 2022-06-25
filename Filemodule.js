// if We want to stop intentionally 

const fs = require('fs');


const a = fs.readFileSync('file.txt')
    console.log(a.toString())


 console.log("Fineshed reading file") // This line is intentionally blocked by using readFileSync method
 

