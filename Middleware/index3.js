//Custom Middlewares
import express from "express";

const app = express();
const port = 3000;
function logger(req,res,next){ //this custom middleware tells me the method and url of the request made
  console.log("The Request Method used was- "+req.method+"\n");
  console.log("The req URL was- "+req.url);
  next(); //a very critical function
}

app.use(logger); //using my custom middleware
 
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
