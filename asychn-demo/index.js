console.log('before');
const user=getUser(1);
console.log(user);

console.log('after');
 
function getUser(id){
    setTimeout(()=>{
        console.log("Reading the database.....");
        return {id:id,githubUserName:'zeenayouhan'};
    },2000);
    return 1;

}