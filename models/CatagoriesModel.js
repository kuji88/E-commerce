const mongoose = require('mongoose')

const Catagory = new mongoose.Schema({
    name: String
})

const catagoryModel = mongoose.model("Catagory", Catagory)

module.exports= catagoryModel