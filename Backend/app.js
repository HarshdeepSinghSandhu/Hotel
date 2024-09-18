const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({
        mes:"this is home page"
    });
})

app.listen(3000,()=>{
    console.log("server Started successfully");
})