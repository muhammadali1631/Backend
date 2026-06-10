import http from "http";

const PORT = 3000

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("Welcome to Home Route");
    }else if(req.url == "/about"){
        res.end("Welcome to About Route")
    }else if(req.url == "/contact"){
        res.end("Welcome to Contact Route")
    }else{
        res.end("404 not found")
    }
})

server.listen(PORT, ()=>{
    console.log("Server is Running on PORT "+ PORT  )
})