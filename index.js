require('dotenv').config()
const express = require('express')
const app = express();

const PORT = 3000

app.get('/',(req,res)=>{
    res.send("Hello World harsh");
})

app.get('/login',(req,res)=>{
    res.send("Hello Login");
})
app.get('/signup',(req,res)=>{
    res.send("<h1>Sign up here</h1>");
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})