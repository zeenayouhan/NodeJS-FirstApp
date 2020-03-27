console.log('before');
getUser(1,(user)=>{
    console.log('user',user);

    getRepositories(user.githubUserName,(repos)=>{
        console.log('repos',repos);
    })
});


console.log('after');
 
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