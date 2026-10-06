const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

const tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        completed: false
    },
    {
        id: 2,
        title: "Build TaskFlow",
        completed: false
    }
];



app.get("/", (req,res) => {
  res.json({
    message: "Welcome to Taskflow API"
  })
});

app.get("/api/tasks", (req,res) => {
  res.json(tasks);
});

app.listen(PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`);
})