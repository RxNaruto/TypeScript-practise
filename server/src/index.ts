const express = require("express");
const app=express();
app.listen(3000);

app.get("/",(req: Request,res: Response)=>{
    console.log("helloWorld");
})