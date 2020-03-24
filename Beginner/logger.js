
console.log(__filename);
console.log(__dirname);

var url="https://mylogger.io/log";

function log(message){
    //Sending a http request
    console.log(message);
}

module.exports.log=log;
//module wrapper function ->(function(exports,require,_filename,__dirname))
//module.exports=log -> function log('zeena')