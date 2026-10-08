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


// Routes 


//Get all tasks

app.get("/", (req,res) => {
  res.json({
    message: "Welcome to Taskflow API"
  })
});


//Get one task

app.get("/api/tasks", (req,res) => {
  res.json(tasks);
});

app.get("/api/tasks/:id",(req,res) =>{
  const id = Number(req.params.id);

  const task = tasks.find(task =>task.id === id);
  if(!task){
    return res.status(404).json({
      message: "Task not found"
    })
  }
res.json(task);
});

//Create a new task

app.post("/api/tasks", (req,res) => {
  const { title } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title: title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
  }
);



// Start the server
app.listen(PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`);
})