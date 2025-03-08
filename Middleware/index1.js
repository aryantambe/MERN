import express from "express";
import { dirname } from "path"; //the curly braces signify that only the specific fn is being imported from the module 
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url)); // converts the file url to path and then dirname() extracts the path

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true})); //the middleware is now "switched on" and req.body is now defined

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html")
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log(req.body); //console logs the JS object
  res.send(req.body); //This immediately displays the values you have entered in the form of a JS object on the page
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
