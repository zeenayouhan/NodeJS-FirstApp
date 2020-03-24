var url="https://mylogger.io/log";

function log(message){
    //Sending a http request
    console.log(message);
}

module.exports.log=log;