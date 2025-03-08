import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // Ensure Express knows you're using EJS

app.get("/", (req, res) => {
  res.render("index", { numLetters: null }); // Pass null initially
});

app.post("/submit", (req, res) => {
  let numLetters = req.body.fName.length + req.body.lName.length;
  res.render("index", { numLetters: numLetters }); // Pass numLetters correctly
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
