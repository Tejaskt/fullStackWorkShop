const { render } = require('ejs')
const express = require('express')
const app = express()
const path = require('path')
const PORT = 8080
app.use(express.json()) // to convert the data into json

app.set('view engine','ejs') // to set ejs engine on server
app.set('views',path.join(__dirname,'views')) // to get and join the path
app.use(express.static(path.join(__dirname,"public")))

/*
    ejs = embeded java script to use html and javascript combined 
    set view engine to ejs in browser to user ejs
*/

app.get('/',(req,res)=>{
   res.render('index')
   let number = Math.floor(Math.random()*10)
   res.render('index',{number})
})

let todoList = ['read book','go gym', 'eat healthy food']
app.get('/todo',(req,res)=>{
    res.render('todo',{todoList})
})

app.listen(PORT,(req,res)=>{
    console.log("server started and running on http://localhost:8080")
})