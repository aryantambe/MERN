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

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (checkResult.rowCount > 0) {
      res.json("Email is already registered, Try logging in!");
    } else {
      const result = await db.query(
        "INSERT INTO users (email,password) VALUES($1,$2)",
        [email, password]
      ); //inserting the registered usernames in the database
      console.log(result);
      res.render("secrets.ejs"); //rendering the ejs file after successfull registration
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;

  const result=await db.query("SELECT * FROM users WHERE email=$1",[email]);  
  if(result.rowCount>0){
    const pass=result.rows[0].password;
    if(pass==password){
      res.render("secrets.ejs");
    }
    else{
      res.json("Incorrect password");
    }
  }
      res.json("Error while loggin in");

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
