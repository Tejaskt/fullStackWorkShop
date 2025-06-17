const express = require('express');
const app = express();

app.get("/",(req,res)=>{
   res.send("<h1>hello world</h1>") 
 //  res.send(`<br/><h1>here is your requirest : ${req}</h1>`)
})

app.use((req,res)=>{
    //res.send(`<br/>here is your requirest : ${req}`)
})

app.listen(8080,()=>{
    console.log("server is started and running at http://127.0.0.1:8080")
})