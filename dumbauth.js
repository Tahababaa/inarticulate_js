const express = require("express");
const app =express();


app.get("/health_checkup",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username!= "admin" || password!="pass"){
        res.status(400).json({"msg": "Your username/password is incorrect"})
        return
    }
    if(kidneyId!=2 && kidneyId!=1){
        res.status(400).json({"msg": "Bad input"})
        return
    }

    res.json({
        "msg":"Chill, Your kidney is working better than a dialysis"
    })
})



app.listen(3002);