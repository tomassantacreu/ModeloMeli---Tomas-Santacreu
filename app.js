
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")))

app.use(express.static(path.resolve(__dirname, "./views")))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
    
})

const PORT = process.env.PORT || 3001;

app.listen(3001,()=>{
    console.log("el servirdor esta funcionando")
})

