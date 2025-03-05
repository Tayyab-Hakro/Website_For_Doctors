import express from "express"
import { Connectdb } from "./database/Connectdb.js";
let Port = 30012;

let  app = express()
app.use(express.json())
Connectdb()


app.listen(Port , function() {
    console.log(`Port is running on ${Port}`)
})