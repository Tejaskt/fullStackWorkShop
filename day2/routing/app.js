const express = require('express')
const app = express()
let PORT = 8080


// middle ware
app.use((req,res)=>{
    res.send("<h1>i am middle ware</h1>")
})


app.listen(PORT,()=>{
    console.log(`server is connected to port:${PORT}`)
})