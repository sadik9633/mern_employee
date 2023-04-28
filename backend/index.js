const express=require ('express')

const server=express()

const cors=require ('cors')

const logic=require('./service/logic')

// connectn with frontend

server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

// port seting for server

server.listen(8000,()=>{
    console.log("server started at port 8000");
})


//api to all employees

server.get('/allEmployees',(req,res)=>{
   logic.allEmployee().then(result=>{
    res.status(result.statusCode).json(result)
   })
})