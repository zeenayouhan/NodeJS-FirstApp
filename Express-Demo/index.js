const startupdebugger=require('debug')("app: startup");
//const dbdebuger=require('debug')('app:db');
const home=require('./routes/home');
const courses= require('./routes/courses');
const config=require('config');
const log=require('./middleware/logger');
const helmet =require('helmet');
const morgan=require('morgan');
const auth=require('./authenticate');
const Joi=require('joi');
const express= require('express');
const app= express();


app.set('view engine','pug');
app.set('views','./views');

app.use('/api/courses',courses);
app.use('/',home);



console.log("Application name:"+config.get('name'));
console.log('Mail: '+config.get('mail.host'));






console.log(`Node env:${process.env.NODE_ENV}`);
console.log(`${app.get('env')}`);

if(app.get('env')==='development')
{
    app.use(morgan("tiny"));
    startupdebugger("Morgan is enabled.......");
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(helmet());

app.use(log);

app.use(auth);








const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listening to the ${port}`);
})

