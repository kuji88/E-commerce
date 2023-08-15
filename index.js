const express = require('express')
const dotenv = require("dotenv")
dotenv.config({ path:"config.env"})
const morgan = require("morgan")

const app = express()

if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
    console.log(`Mode:${process.env.NODE_ENV}`)
}

app.get('/', (req,res)=>{
    res.send("hello team red")
})

app.listen(process.env.PORT || 8000, ()=>{
    console.log(`this app working on port 8000`)
})