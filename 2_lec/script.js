//const fs = require('node:fs');
//write file
//append file,cpoyfile,rename,unlink

// fs.writeFile("hey.txt","hey kaise ho", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt"," hey kaise ho2", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt","hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt","./copy/copy.txt",function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// })

// fs.unlink("hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// fs.rmdir("./copy",{recursive : true},function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })


const http = require('http');

const server = http.createServer(function(req,res){
    res.end("hello world");
})

server.listen(3000);
