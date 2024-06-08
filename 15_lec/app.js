const express = require('express');
const app = express();
const userModel = require("./models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const path = require('path');
const { Console } = require('console');



app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());




app.get('/',(req,res) => {
    res.render('index');
});

app.post('/create', (req,res)=>{
    let {username, email, password, age} = req.body;
bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(password, salt,async (err,hash) => {
        let createduser =  await userModel.create({
            username,
            email,
            password : hash,
            age
        })

        let token = jwt.sign({email}, "shhhhhh");
        res.cookie("token", token);
        res.send(createduser);
    })
})
})

app.get("/logout", function(req,res){
    res.cookie("token","");
    res.redirect("/");
})

app.get("/login", function(req,res){
    res.render("login");
})

app.post("/login",async function(req,res){
    let user = await userModel.findOne({email: req.body.email});
    if(!user) return res.send("something is wrong");

    bcrypt.compare(req.body.password,user.password, function(err,result){
        if(result) {
            let token = jwt.sign({email : user.email}, "shhhhhh");
            res.cookie("token", token);
            res.send("yes u can login");
        }
        else res.send("you can't login");
    })
})

app.get("/sc",function(req,res){
    res.send("check");
})

app.listen(3000);


