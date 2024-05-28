// console.log(__dirname);
// console.log(__dirname+'/public');





const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());//parsers
app.use(express.urlencoded({extended:true}));//parsers
app.use(express.static(path.join(__dirname, 'public'))); //app.use(express.static(har request ke liye static file is path par dundhna)));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index");
});

// app.get("/profile/harsh",function(req,res){
//     res.send("chal rha hai");
// });

// app.get("/profile/:kuchbhi",function(req,res){  // dynamic route
//     res.send("chal rha hai dynamic");
// });


app.get("/profile/:username",function(req,res){  // dynamic route
    
    res.send("chal rha hai dynamic :- "+req.params.username);
});


app.get("/profile/:kuchbhil/:agr",function(req,res){  // dynamic route
    res.send("chal rha hai dynamic");
});

app.listen(3000, function(){
    console.log("it running");
});



