const http= require('http');

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello World");
        res.end();
    }
    if(req.url==='/api/zeena'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

//server.on("connection",(Socket)=>{
//    console.log("Connected");/
//})

server.listen(5000);

console.log("Port is 5 000")


//##########################################
//const EventEmitter = require('events');



//const Logger=require('./logger');
//const log=new Logger();


//log.on('MessageLogged',(arg)=>{
//    console.log('Called Listenner',arg);
//})

//log.log("Message");

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