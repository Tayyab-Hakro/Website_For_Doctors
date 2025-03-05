import express from "express"
import { Connectdb } from "./database/Connectdb.js";
import cors from "cors"
import UserRouter from "./routes/UserRoute.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv/config'

let Port = 3000;


let  app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
Connectdb()

app.use('/api/user' , UserRouter)

app.listen(Port , function() {
    console.log(`Port is running on ${Port}`)
})