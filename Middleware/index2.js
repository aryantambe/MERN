import express from "express";
import morgan from "morgan"; //This is a logging middleware for express
import fs from "fs"; //importing fs module to log the requests inside a .log file (same as a .txt file)


const app = express();
const port = 3000;
const logStream = fs.createWriteStream("access.log", { flags: "a" }); //Created a write stream named access.log, the flag :a means the mode is append mode, it can be w,r etc.


app.use(morgan("dev",{stream: logStream})); //using the middlewae for logging, the logs are added in logStream we created above

// we can use dev,combined,tiny etc formats for morgan
logStream.write("New log entry\n");


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
