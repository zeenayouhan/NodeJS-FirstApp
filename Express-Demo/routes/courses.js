const express= require('express');
const router=express.Router();


const courses=[
    {id:1, name:'course1'},
    {id:2, name:'Course2'},
    {id:3, name:'Course3'}
]

router.get('/',(req,res)=>{
    res.send(courses);

});

router.post('/',(req,res)=>{
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

router.put('/:id',(req,res)=>{
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
  
router.get('/:id',(req,res)=>{
    var course = courses.find(c => c.id===parseInt(req.params.id))
    if(!course) res.status(404).send("The course with given id was not found");
    res.send(course);

});
router.delete('/:id',(req,res)=>{
    var course = courses.find(c => c.id===parseInt(req.params.id))
    if(!course) res.status(404).send("The course with given id was not found");

    const index=courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);

})

module.exports=router;