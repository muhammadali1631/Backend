import express from 'express';

const app = express();
const PORT = 8000;

app.get('/search',(req,res)=>{
    const query = req.query;
    res.json(query);
})

app.listen(PORT, ()=>{
    console.log("Server is started")
})