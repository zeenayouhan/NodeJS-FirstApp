const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('MessageLogged',function(){
    console.log('Called Listenner');
})
emitter.emit('MessageLogged');


//########################################
//const fs= require('fs');

//const files= fs.readdirSync('./');

//console.log(files);

//fs.readdir('./k',function(err,files){
  //  if(err) console.log('Error');
  //  else console.log(files);
//})


//########################################
//const os= require('os');

//var freememd= os.freemem();

//console.log(freememd);





//#########################################
//const path = require('path');
//var pathobj= path.parse(__filename);

//console.log(pathobj);


//##########################################
//var logger= require('./logger.js');

//console.log(logger);




//logger.log("Hi Zeena");

//########################################
//function SayHello(name){
//    console.log('Hello '+name)
//}

//SayHello('Zeena');