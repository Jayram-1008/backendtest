require('dotenv').config();
const express = require('express')
const app = express();

const port =process.env.PORT;

app.get('/',(req, resp)=>{
    resp.send("Hii developer home page")
})    
app.get('/about',(req, resp)=>{
    resp.send("Hii developer about page")
})    
app.get('/login',(req, resp)=>{
    resp.send("<h2>Hii developer login page</h2>")
})    
app.get('/youtube',(req, resp)=>{
    resp.send("<h2>Chai aur code</h2>")
})   

app.get('*',(req, resp)=>{
    resp.send("Hii developer Error page")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})