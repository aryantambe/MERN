import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
//const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "aryantambe";
const yourPassword = "qwerty";
const yourAPIKey = "2750eec4-3021-45a4-bf6f-988002e0827d";
const yourBearerToken = "27f5b540-a9e1-49e6-ad97-646018ffef46";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/random");
    const result=response.data;
    console.log(result);
    res.render("index.ejs", { content: JSON.stringify(result) });
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth",async (req, res) => {
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/all?page=2",{
      auth:{
        username:yourUsername,
        password:yourPassword,
      }
    })
    const result=response.data;
    res.render("index.ejs",{content:JSON.stringify(result)})
  }catch(error){
    res.status(404).send(error.message);
  }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey",async (req, res) => {
  try{
    const response=await axios.get("https://secrets-api.appbrewery.com/filter",{
      params: {
        score:5,
        apiKey:yourAPIKey,
      }
    })
    const result=response.data;
    res.render("index.ejs",{content: JSON.stringify(result)})
  }catch(error){
    res.status(404).send(error.message)
  }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  try{
    const response=await axios.get("https://secrets-api.appbrewery.com/secrets/42",{
      headers:{
        Authorization:`Bearer ${yourBearerToken}`
      }
    })
    const result=response.data;
    res.render("index.ejs",{content:JSON.stringify(result)})
  }catch(error){
    res.status(404).send(error.message)
  }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
