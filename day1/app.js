let a = 10
console.log(a)
console.log("hello guys.")

// for details. it is like window object in java script
//console.log(process)

// for taking user input from terminal 

//argv take arguments from user and take that arg usign array.slice(2)
let newArr = process.argv.slice(2)
console.log(newArr)

// node is javascript REPL that is read evoluate print loop

// to see corrent working directory.
console.log(process.cwd()) // its show the path where you stand
console.log(__dirname) // show path upto the app.js

// path module 

const path = require('path')

let ans = path.join("hello","how","are","you")
console.log(ans)