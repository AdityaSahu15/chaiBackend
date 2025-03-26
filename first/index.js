require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('adityasahuTWITTER')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})  

// basically port ki value doosri file se import karwai h .... iss file mai hum important and sensitive data rakhte h
// to keep it safe from unauthorized access