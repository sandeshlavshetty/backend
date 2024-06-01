const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// app.get("/",function(req,res){
//    // res.cookie("name","harsh");
//     //res.send("done");

//     // bcrypt.genSalt(10, function(err, salt){
//     //     bcrypt.hash("pololololoo",salt,function(err, hash){
//     //         // Store hash in your password DB
//     //         console.log(hash);
//     //     });
//     // });

//     //decrypt
//     // bcrypt.compare(mytextplainpassword,hash,function(err,result){
//             //result == true
//     // });
//     bcrypt.compare("pololololoo","$2b$10$tAwP8wEqb1s1NVoTcsVRKenzLl4xpINZrIoMGG8VukUJODybGAF8.",function(err,result){
//             console.log(result);
//     });


// })


// app.get("/read",function(req,res){
//     //console.log(req.cookies);
//     res.send("read page");
// })



// JWT 

app.get('/',function(req,res){
       let token=  jwt.sign({email:"harsh@example.com"},"secret");
       res.cookie("token",token);
       console.log(token);
       res.send("done");
})

app.get("/read",function(req,res){
      //  console.log(req.cookies.token);

        let data = jwt.verify(req.cookies.token,"secret");
        console.log(data);
        
        res.send("token got");
})


app.listen(3000);