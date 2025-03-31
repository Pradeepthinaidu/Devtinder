const express=require('express')

const app=express(); //created an application

// if port is not mentioned default port is assigned by os 
// const server=app.listen(()=>{ 
//     console.log(`Hello from server ${server.address().port}`);
// })
app.use("/hello",(req,res)=>{
    res.send("Hello ")
})

app.use("/",(req,res)=>{
    res.send("Hello from dashboard")
})
app.listen(3000,()=>{console.log("Server is listening on port 3000...")})

// const app1=express();
// app1.use("/hello",(req,res)=>{
//     res.send("hi from port 7777")
// })
// app1.listen(7777,()=>{console.log("Server is listening on port 7777...")})



