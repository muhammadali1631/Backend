import express from 'express';

const app = express();
const PORT = 8000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello from home page')
})

app.post('/',(req,res)=>{
    const body = req.body
    console.log(body)
    res.send("Hello this is post method route")
})


// This page return response in JSON 
app.get('/data',(req,res)=>{
    res.json({name: "Ali", role: "Programmer"})
})

app.listen(PORT,()=>{
    console.log("Server is started")
})