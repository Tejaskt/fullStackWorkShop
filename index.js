const express = require("express");
const fs = require("fs");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
let stud = require("./student.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method"));

app.get("/student", (req, res) => {
  res.render("index", { students: stud });
});

app.post("/student", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(401).json({ message: "body values are missing!" });
  }

  stud.push({ name, email });

  fs.writeFile("student.json", JSON.stringify(stud), (err) => {
    console.log("Data added");
  });

  res.redirect("/student");
});

app.put("/student/:email", (req, res) => {
  const { email } = req.params;
  const { name } = req.body;

  if (!email || !name) {
    return res.status(401).json({ message: "email or name not provided" });
  }

  stud = stud.map((x) => {
    if (x.email === email) {
      x.name = name;
    }
    return x;
  });

  fs.writeFile("student.json", JSON.stringify(stud), (err) => {
    console.log("Data updated");
  });

  res.redirect("/student");
});

app.delete("/student/:email", (req, res) => {
  const { email } = req.params;

  if (!email) return res.status(401).json({ message: "email not provided" });

  stud = stud.filter((x) => x.email !== email);

  fs.writeFile("student.json", JSON.stringify(stud), (err) => {
    console.log("Data deleted");
  });

  res.redirect("/student");
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
