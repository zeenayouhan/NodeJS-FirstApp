const EventEmitter = require('events');


console.log(__filename);
console.log(__dirname);

var url="https://mylogger.io/log";
class Logger extends EventEmitter{
    log(message){
    //Sending a http request
    console.log(message);
    this.emit('MessageLogged',{id:1,url:'https://'});
}
}
module.exports=Logger;
//module wrapper function ->(function(exports,require,_filename,__dirname))
//module.exports=log -> function log('zeena')