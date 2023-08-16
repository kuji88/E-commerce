const express = require('express')
const dotenv = require("dotenv")
dotenv.config({ path:"config.env"})
const morgan = require("morgan")
const DB = require('./config/Database')
const { CatagoryRouter } = require('./routers/CatagoriesRoute')


//* Express app
const app = express()


//* Middlewears

app.use(express.json())
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
    console.log(`Mode:${process.env.NODE_ENV}`)
}

//!Routes
app.use('/api/v1',CatagoryRouter)


//* Server creator
app.listen(process.env.PORT || 8000, ()=>{
    DB()
    console.log(`this app working on port 8000`)
})