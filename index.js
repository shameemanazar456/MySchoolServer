//1) dot env

require('dotenv').config() //env variable will be added to process.env

//import express
const express = require('express')

//import cors
const cors = require('cors')

const router = require('./router')

//import mongodb
require('./db/connection')

//create server
const mySchoolServer = express()

//use cors to connect with frontend
mySchoolServer.use(cors())

//json() - middeleware to convert json format(data from frontend) to javascript format(object)

mySchoolServer.use(express.json())

//server use router

mySchoolServer.use(router)

mySchoolServer.use('/uploads', express.static('./uploads'))


//port

const PORT = 3000 || process.env.PORT

//run the server

mySchoolServer.listen(PORT,()=>{
    console.log(`My School Server running successfylly at Port Number :${PORT}`);
})

mySchoolServer.get('/',(req,res)=>{
    res.send('get request recieved')
})


