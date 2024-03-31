import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const port = process.env.PORT || 8080;


//rutas
app.get('/', (_res,req)=>{
    req.send("SoyMaryu")
})


//Conectar mongoos
const MONGODB= process.env.MONGODB_URI
 mongoose.connect(MONGODB).then(()=>console.log("Conectado a atlas")).catch((err)=> console.log("Eroor "));


 app.listen(port,()=> console.log("escuchando en el puerto: ",port) )