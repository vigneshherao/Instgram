const express = require("express");


const app = express();

const port = 8080;

app.use("/public",express.static("public"));
app.use("/Assets",express.static("Assets"));

app.listen(port,()=>{
    console.log("port is startted");
})

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("root.ejs");
})
app.get("/:username",(req,res)=>{
    const instaData = require("./data.json");
    let {username} = req.params;
    const data = instaData[username];
    console.log(data);
    res.render("home.ejs",{data});
})