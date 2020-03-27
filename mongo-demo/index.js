const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(()=> console.log("connected the mongodb.."))
.catch(err=> console.error('Could not connect to the db'));


const CourseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags :[String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
});

const Course=mongoose.model('Course',CourseSchema);

async function createCourse(){
const course = new Course({
    name:'Angular Course',
    author:'Zeena',
    tags:["Angular","Frontend"] ,
    isPublished:true
});

//const result=await course.save();
console.log(result);
}


async function getCourses(){
   const courses= await Course.find({author:"Zeena",tags:["Frontend"]}).limit(10).sort({name:1}).select({name: 1, tags:1});
   console.log(courses);
}

getCourses();

createCourse();