const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("connected the mongodb.."))
.catch(err=> console.error('Could not connect to the db'));


const CourseSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
        minlength:5,
        maxlength:255,
    },
    category:{
        type: String,
        enum:['web','mobile','network'],
        lowercase:true

    },
    author: String,
    tags :{
        type: Array,
        validate:{
            isAsync:true,
            validator: function(v,callback){
                setTimeout(()=>{
                    //Do some async work
                    const result= v && v.length>0;
                    callback(result);
                }, 1000);  
                
            },
            message: 'A course has at least one tag'
        }
    },
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price:{
        type: Number,
        required: function(){ return this.isPublished}

    }
});

const Course=mongoose.model('Course',CourseSchema);

async function createCourse(){
    
const course = new Course({
    name:'mjkjkj',
    category:'web',
    author:'Zeena',
    tags:["Angular","Frontend"] ,
    isPublished:true,
    price:12
});
    try{
        //await course.validate();
        const result=await course.save();
         console.log(result);

    }
    catch(ex){
        for(field in ex.errors)
        console.log(ex.errors[field]);
    }

}
createCourse();

// async function getCourses(){
//     //eq(equal)
//     //ne - not equal
//     //gt -greater than
//     //gte -greater than or equal
//     //lt-less than
//     //lte -less than or equal
//     //in
//     //nin-not in
//     //find({price: {4gte:10, $lte:20}})
//     //find({price:{$in:[10,20,30]}})

//     //or
//     //and
//     //find().or([{author:'mosh'},{isPublished:true}])Mosh


//     //starts with mosh
//     //find({author: /^/})

//     //Ends with Hamedani
//     //find({author:/Hamedani$/i})-case sensitive - use i

//     //contains mosh
//     //.find({author: /.*Mosh.*/i})

//    const pageNumber =2;
//    const pageSize=10;
//    // /api/courses?pageNumber=2&pageSize=10
   
//    //skip((pageNumber-1)*pageSize).limit(pageSize)
//    const courses= await Course.find({author:"Zeena",tags:"Frontend"}).limit(10).sort({name:1})
//    .select({name: 1, tags:1}).count();
//    console.log(courses);
// }

// getCourses();






// async function updatecourse(id) {
//     //Approach : Query first
    //findbyId()
    //Modify its properties
    //save()
    // const course=await Course.findById(id);
    // if(!course) return;


    // course.isPublished=true;
    // course.author="Another Author";
    // //course.set({
    // //    isPublished:true,
    //   //  author="Another Author",
    // //})
    // const result=await course.save();
    // console.log(result);

    //Approach: update first
    //update directly
    //optionally : get the update documents
    // const result= await Course.update({_id:id},{
    //     $set:{
    //         author:'Mosh',
    //         isPublished: false
    //     }
    // });
    // console.log(result);
//     const course= await Course.findByIdAndUpdate({_id:id},{
//         $set:{
//             author:'Mosh',
//             isPublished: false
//         }
//     },{new :true});
//     console.log(course);
// }

// updatecourse('5e7e3671212db221e8cad5f1');


// async function removeCourse(id){
//     const result=await Course.deleteOne({_id:id});
//     const course= await Course.findByIdAndRemove(id);
//     console.log(result);
// }
// removeCourse('5e7e3671212db221e8cad5f1')