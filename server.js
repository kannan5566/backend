const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//MONGOOSE CONNNECTIONS

mongoose.connect(process.env.MONGOOSE_URL).then((res) => {
    console.log(`Database connected Successfully !!!`)
})

//PORT DETAILS

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server running on 8080")
})