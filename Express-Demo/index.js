const startupdebugger=require('debug')("app: startup");
//const dbdebuger=require('debug')('app:db');

const config=require('config');
const log=require('./logger');
const helmet =require('helmet');
const morgan=require('morgan');
const auth=require('./authenticate');
const Joi=require('joi');
const express= require('express');
const app= express();


app.set('view engine','pug');
app.set('views','./views');



























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






const courses=[
    {id:1, name:'course1'},
    {id:2, name:'Course2'},
    {id:3, name:'Course3'}
]

app.get('/',(req,res)=>{
    res.render('index',{title:'my express app',message:"hi zeena"});

});
app.get('/api/course',(req,res)=>{
    res.send(courses);

});

app.post('/api/course',(req,res)=>{
    const schema={

        name:Joi.string().min(3).required()
    }
    const {error}=validateCourse(req.body);  //result.error
      if(error){
        res.status(400).send(error.details[0].message);
        return ;
    }
    //input validating
   // if(!req.body.name || req.body.name.length<3){
     //   res.status(400).send("Invalid name");
       // return ;
    //}
    const course={
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
})

app.put('/api/course/:id',(req,res)=>{
    var course = courses.find(c => c.id===parseInt(req.params.id))
    if(!course) res.status(404).send("The course with given id was not found");

    const result=validateCourse(req.body);
    const {error}=validateCourse(req.body);  //result.error
      if(error){
        res.status(400).send(error.details[0].message);
        return ;
    }
    
    course.name=req.body.name;
    res.send(courses);

    

})
function validateCourse(course){
    const schema={

        name:Joi.string().min(3).required()
    }
    return Joi.validate(course,schema);
}
  
app.get('/api/course/:id',(req,res)=>{
    var course = courses.find(c => c.id===parseInt(req.params.id))
    if(!course) res.status(404).send("The course with given id was not found");
    res.send(course);

});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listening to the ${port}`);
})

app.delete('/api/course/:id',(req,res)=>{
    var course = courses.find(c => c.id===parseInt(req.params.id))
    if(!course) res.status(404).send("The course with given id was not found");

    const index=courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);

})