const express = require('express');
const app = express();
// const mongoose = require('mongoose');

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
      let createuser= await  userModel.create({  //so for to excute this first
            name: "harsh the 2",
            email: "harsh@gmail.com",
            username: "harsh2"
        })

        res.send(createuser);
    // console.log("hey");  //async code
})

app.get('/update', async (req, res) => {
    // userModel.findOneAndUpdate(findone, update, {new:true})
    // let updateduser = await userModel.findOneAndUpdate({ username: "harsh" }, { name: "harsh vandana sharma" }, { new: true })
    // res.send(updateduser);
})

app.get('/read', async (req, res) => {
    let users = await userModel.find();
  // let users = await userModel.find({username:"harsh"});
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({username:"harsh2"});
  // let users = await userModel.find({username:"harsh"});
    res.send(users);
})

app.listen(3000);