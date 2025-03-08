import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    // console.log(req.rawHeaders) this method gives us some info about the request we made
    res.send("<h1>Response sent as a html tag</h1>") //we can also include html tags
})
app.get("/about",(req,res)=>{
    res.send("<h1>Welcome to the about page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to the Contact page</h1>")
})
app.listen(port,()=>{ //listens for any commands
    console.log(`Server running on port ${port}`);
})