const express = require('express')
const dotenv = require("dotenv")
dotenv.config({ path:"config.env"})
const morgan = require("morgan")
const DB = require('./config/Database')
const { CatagoryRouter } = require('./routers/CatagoriesRoute')
const ApiError = require('./utils/ApiError')


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

//* Route Error
app.all('*',(req,res,next)=>{
    
    next(ApiError(`Can't find this route${req.originalUrl}`,404))
})  

//* Globale handler
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'Error'
    res.status(404).json({
        status: err.status,
        statusCode: err.statusCode,
        message: err.message,
        stack: err.stack
    })

})


//* Server creator
app.listen(process.env.PORT || 8000, ()=>{
    DB()
    console.log(`this app working on port 8000`)
})