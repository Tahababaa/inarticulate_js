const express = require('express')
const app=express();

var users =[{
    name:'John',
    kidneys:[{
        healthy:false
    }]
}]
app.use(express.json());

// User can check how many kidneys are healthy
app.get("/",(req,res)=>{
   const johnKidneys = users[0].kidneys;
   const numberOfKidneys = johnKidneys.length;
   let numberOfHealthyKidneys =0;
   for(let i=0;i<johnKidneys.length;i++){
    if(johnKidneys[i].healthy){
        numberOfHealthyKidneys+=1;
    }
   }
   const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys;
   res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
   })
})
// User can add a new kidney
app.post("/",(req,res)=>{
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "DONE"
    })
 })
//  Useer can replace a kidney make it unhealthy
 app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
 })
 // User can re move a kidney
 app.delete("/",(req,res)=>{
    const newKidneys =[];
    for(i =0;i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({})
 })
app.listen(3000);