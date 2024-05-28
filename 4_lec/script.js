const express = require('express')
const app = express()


// Middleware
app.use(function(req,res,next){
    console.log("middleware chaloa");
    next();
});


app.get('/',function(req, res){
    res.send('Hello World changed')
});


//routes create karna 

app.get('/profile',function(req, res,next){
    res.send('Hello World 23456 profile changed')
    next();

});


//error handling // go at express.js erron handling website
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke')
})





app.listen(3000);



