const http = require('http');

const server = http.createServer((req,res) => {
  if (req.url === "/"){
    res.end("Welcome to TaskFlow");
  }
  
  else if (req.url === "/tasks"){
    res.end("Here are your tasks");
  }

});

server.listen(3000,() => {
  console.log("Server is listening on port 3000");
})