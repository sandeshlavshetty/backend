const express = require('express');
const app = express()
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/",function(req,res){
    res.send("working");
})

app.get("/create",async function(req,res){
    let user = await userModel.create({
        username : "harsh",
        age : 25,
        email:"harsh@gmail.com"
    })
    res.send(user);
})

app.get("/post/create", async (req,res)=>{
    let post = await postModel.create({
        postdata : "hello saare log kaise ho",
        user : "6663fac71ecae639815a30a4"
    })

   let user = await userModel.findOne({_id: "6663fac71ecae639815a30a4"});
   user.posts.push(post._id);
   await user.save();

    res.send({post,user});
})

app.listen(3000);