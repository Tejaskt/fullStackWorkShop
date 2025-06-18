const express = require('express')
const app = express()
let PORT = 8080


// // middle ware
// app.use((req,res)=>{
//     res.send("<h1>i am middle ware</h1>")
// })


// routing -> get method 
app.get('/signup',(req,res)=>{
    res.send("<h1>i am get method")
})

//path parameter
app.get('/r/:anything',(req,res)=>{
    console.log(req.params)
    console.log(req.params.anything)
    let{anything} = req.params
    res.send(`<h1>my faviriot animal is ${anything}</h1>`)
})

// query parameter
app.get('/search',(req,res)=>{
    console.log(req.query.movie)
    let{movie} = req.query
    res.send(`<h1>my fav movie is ${movie}</h1>`)
    
})


app.listen(PORT,()=>{
    console.log(`server is connected to port:${PORT}`)
})