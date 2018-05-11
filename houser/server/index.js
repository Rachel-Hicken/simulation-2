const express = require('express')
const bodyParser = require('body-parser')

const mc = require(__dirname + './controller') 
const app = express()


app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'))






const port = 3001;
app.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`)
})