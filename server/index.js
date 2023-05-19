const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const fs = require('fs')

const NewsDetails = require("./model/info.model.js")
const { getInfo } = require('./controllers/info');

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res) => {
    res.send("server running")
})

app.get('/getInfo',getInfo);

const data = JSON.parse(fs.readFileSync("./jsondata.json","utf-8"))
// console.log(data);

//Now to import the data from .json file to mongoDB
const importData = async() => {
    await NewsDetails.create(data)
    process.exit()
}
// run this above function once for importing the data to Database
// importData()

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)
})

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.9msr4gt.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL).then( () => {
    console.log("Connected to database")
}).catch((error) =>{
    console.log(error)
})
