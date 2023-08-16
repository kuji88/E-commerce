const catagoryModel = require('../models/CatagoriesModel')
const slugify = require('slugify')
const aysncHandler= require('express-async-handler')


//@Get Catagories   /api/v1/
//@                    Access public
exports.getCatagory=aysncHandler( async(req,res)=>{
    const page = req.query.page * 1 || 1
    const limit = req.query.limit *1 || 5
    const skip = (page - 1) * limit
    const Catagories = await catagoryModel.find({}).skip(skip).limit(limit)
    res.status(200).json({results:Catagories.length,page: page, data:Catagories})
})


//@Create Catagories   /api/v1/
//@                    Access Private
exports.createCatagory =aysncHandler(async (req,res)=>{
    const name = req.body.name
    await catagoryModel.create({name, slug:slugify(name)})
    .then((cata)=>{res.status(200).json({data: cata})})
    
})