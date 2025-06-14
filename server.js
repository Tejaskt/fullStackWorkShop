var http = require('http')

const a = 50
const b = 40

var c = a+b

http.createServer((req,res)=>{
    res.write("<br/>hello world!<br/>")
    res.end("the value of a = " + a +  
        "<br/>the value of b =  " + b + 
        "<b><br/>the sum of the values is</b> "+(a+b))

}).listen(3000)

console.log("server started and run on http://127.0.0.1:3000")