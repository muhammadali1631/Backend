import express from 'express';
import cors from 'cors'

const app = express();
const PORT = 8000;

app.use(cors({
    "origin": "http://localhost:5173"
}))

app.use(express.json())

app.get('/',(req, res)=>{
    res.json({"name":"Ali", "age": 19})
})
app.post('/',(req, res)=>{
    const data = req.body;
    console.log(data)
    res.send({sucess: true})
})

app.listen(PORT, ()=>{
    console.log("Server is started on port " + PORT)
})
