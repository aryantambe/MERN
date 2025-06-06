import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "Aryan@2004",
  port: 5432,
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;
  const result = await db.query(
    "INSERT INTO users (email,password) VALUES($1,$2)",
    [email, password]
  ); //inserting the registered usernames in the database
  console.log(result);
  res.render("secrets.ejs");
});

app.post("/login", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
