import express from "express";

const app = express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.get("/api",(req,res)=>{
    res.status(200,"OK").send("Boas vindas à imersão!");
});
