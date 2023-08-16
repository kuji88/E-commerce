const catagoryModel = require('../models/CatagoriesModel')


const catagoryController = (req,res)=>{
    const name = req.body.name
    const newCatagory = new catagoryModel({name})

    newCatagory.save().then((doc)=>{
        res.json(doc)
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports= catagoryController