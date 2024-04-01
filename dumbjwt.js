const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

const app= express();
app.use(express.json());

let ALL_USERS =[{
    username:"mrindia@gmail.com",
    password:"123",
    name: "Mr India",
},
{
    username:"Msdhoni@kingmail.com",
    password:"Thala",
    name:" Ms Dhoni",
},{
    username:"mjks@gmail.com",
    password:"1232321",
    name:"MJK SD"
},
];

function userExists(username,password){
    let userExists =false;
    for(let i =0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists=true;
        }
    }
    return userExists;
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "User doesn't exist in our inmemory db",
        });
    }
    var token = jwt.sign({username: username},jwtPassword);
    return res.json({
        token,
    });
});