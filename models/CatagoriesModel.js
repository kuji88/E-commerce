const mongoose = require('mongoose')

const Catagory = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Catagory required'],
        unique: [true, 'catagory must be unique'],
        minlength: [3, 'Catagory must be min 3 letters'],
        maxlength: [32, 'Catagory must be max 32 letters']
    },
    slug:{
        type: String,
        lowercase:true,
        required: true,
    }

}, {timestamps:true})

const catagoryModel = mongoose.model("Catagory", Catagory)

module.exports= catagoryModel