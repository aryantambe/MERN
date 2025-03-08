import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.get("/", async (req,res)=>{
    try{
        const response= await axios.get("https://jsonplaceholder.typicode.com/users/");
        const result=response.data;
        console.log(result)
        res.json(result);
       
    }
    catch(error){
        console.log(error)
    }

})









app.listen(port,()=>{
    console.log("Listening on port 3000");
})