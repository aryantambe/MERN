import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "first",
  password: "Aryan@2004",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route to handle the GET request and render the EJS with dynamic data
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    let countries = [];
    for (let i = 0; i < result.rows.length; i++) {
      countries.push(result.rows[i].country_code);
    }

    // Rendering the EJS with the dynamic countries and total count
    res.render("index.ejs", { countries: countries, total: countries.length });
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle the POST request and insert country code into the visited_countries table
app.post("/add", async (req, res) => {
  const input = req.body.country;

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE country_name=$1",
      [input]
    );

    if (result.rows.length !== 0) {
      const data = result.rows[0];
      const countryCode = data.country_code;

      // Insert the country code into the visited_countries table
      await db.query("INSERT INTO visited_countries (country_code) VALUES($1)", [countryCode]);
    }
    res.redirect("/");
  } catch (error) {
    console.error("Error adding country:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
