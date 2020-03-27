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



 
function getUser(id, callback){
    setTimeout(()=>{
        console.log("Reading the database.....");
        callback({id:id,githubUserName:'zeenayouhan'});
    },2000);
    return 1;

}

function getRepositories(username,callback)
{
    setTimeout(() => {
        console.log('calling github Api ...');
        callback(['repo1','repo2','repo3']);
        
    }, 2000);
    
}


//Synchronous
//console.log('before');
//const user=getUser(1);
//const repos  = getRepositories(user.githubUserName);
//const commits= getCommits(repos[0]);
//console.log('after');