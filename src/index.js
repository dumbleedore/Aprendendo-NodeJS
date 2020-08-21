const express = require('express')
const mongoose = require('mongoose')
const { json } = require('body-parser')
const port = 8080


    // Iniciando App
    const app = express()
    app.use(express.json())

 // Conectando DB
     mongoose.Promise = global.Promise // evitar problemas do mongodb
     mongoose.connect('mongodb://localhost/nodeapi',{useNewUrlParser: true,useUnifiedTopology:true}).then(() =>{
     console.log("Conectado ao MongoDB")
     }).catch((err) =>{
         console.log('Erro')
     })


     app.use('/api', require('./routes'))

app.listen(port,()=>{
    console.log('Server Running')
})

