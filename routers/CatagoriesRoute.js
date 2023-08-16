const express = require('express')
const {getCatagory,createCatagory, getCatagoryByid, updateCatagory, deleteCatagory} = require('../controllers/CatagoryController')


const CatagoryRouter = express.Router()

CatagoryRouter.route('/').get(getCatagory).post(createCatagory)
CatagoryRouter.get('/:id',getCatagoryByid).put('/:id',updateCatagory).delete('/:id',deleteCatagory)

module.exports={CatagoryRouter}