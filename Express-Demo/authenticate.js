function authenticate(req,res,next){
    console.log("Aunthentication...");
    next();
}

module.exports=authenticate;