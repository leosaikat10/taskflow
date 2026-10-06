const express = require("express");

const app = express();

app.get("/", (req,res) => {
  res.send("Welcome to TaskFlow");
});

app.get("/tasks", (req,res) => {
  res.send("Here are your tasks");
});

app.listen(3000, () =>{
  console.log("Server is running on port 3000");
})