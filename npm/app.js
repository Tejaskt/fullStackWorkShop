/*var giveMeAJoke = require('give-me-a-joke');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});

var figlet = require("figlet");
const { json } = require('body-parser');

figlet("t e j a s", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
*/

async function sendReq() {
    let req = await fetch("http://localhost:8080/users",{
    
    method:"GET",
    
    // body:JSON.stringify({
    //   name: "tejas",
    //   email:"tejas@gmail.com",
    //   password:"12345"
    // })
  })

  console.log(req)
  let res = await req.json()
  console.log(res)
} 
sendReq()

