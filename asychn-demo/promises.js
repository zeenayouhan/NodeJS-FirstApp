const p = new Promise((resolve,reject)=>{
    //kick off some async work
    setTimeout(()=>{
        //resolve(2);
        reject(new Error('message'));

    },2000);
    
   

});
p.then(result =>console.log('result: ',result))
.catch(err=>console.log('Error',err.message)); 