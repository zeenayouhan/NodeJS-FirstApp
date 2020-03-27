//Asynchrounous
console.log('before');
getUser(1,getRepositories);


console.log('after');

function getRepositories(user){

    getRepositories(user.githubUserName,gitCommits);

}
function gitCommits(repos){
    gitCommits(repo,displayCommits);
}
function displayCommits(commits){
    console.log(commits);
}
//promises
getUser(1)
.then(user=>getRepositories(user.githubUserName))
.then(repos=>getCommits(repos[0]))
.then(commits=>console.log('Commits',commits))
.catch(err=>console.log('error',err.message)); 

//Async and Await approach
async function displayCommits(){
    try{
        const user=await getUser(1);
        const repos=await getRepositories(user.githubUserName);
        const commits= await getCommits(repos[0]);
        console.log(commits);

    }
    catch(err){
        console.log("error",err.message);
    }

}

displayCommits()


function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Reading the database.....");
        resolve({id:id,githubUserName:'zeenayouhan'});
    },2000);


    })
    

}

function getRepositories(username)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('calling github Api ...');
            resolve(['repo1','repo2','repo3']);
            
        }, 2000);

    })
    
    
}

function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Github API...');
            resolve(['commit']);
        })
    })
}


//Synchronous
//console.log('before');
//const user=getUser(1);
//const repos  = getRepositories(user.githubUserName);
//const commits= getCommits(repos[0]);
//console.log('after');