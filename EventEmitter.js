const EventEmitter = require('events'); 

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
    console.log('please turn off the motor');
    setTimeout(()=> { // this is the time based reminder
        console.log('please turn off the motor! Its a gentle reminder');
    }, 3000);
 });


console.log("the script is running")
myEmitter.emit('WaterFull'); // When ever the event is emited this msg will be printed('please turn off the motor') after (3000)3sec the next event is Emit
console.log("The script is still running")

 
