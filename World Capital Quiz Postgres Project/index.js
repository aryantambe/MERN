import express from "express";
import bodyParser from "body-parser";
import pg, { Client } from "pg";

const app = express();
const port = 3000;

const db= new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"first",
  password:"Aryan@2004",
  port:5432,
});

db.connect();

db.query("SELECT * FROM capitals",(err,res)=>{
  if(err){
    console.log("An error occured ",err.stack);
  }
  else{
    quiz=res.rows;
    console.log(res.command);
    console.log("Number of rows affected ",res.rowCount);
  }
  db.end();
})

let quiz = [
  ];

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
