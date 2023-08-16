const express = require('express')
const {getCatagory,createCatagory, getCatagoryByid, updateCatagory, deleteCatagory} = require('../controllers/CatagoryController')


const CatagoryRouter = express.Router()

CatagoryRouter.route('/').get(getCatagory).post(createCatagory)
CatagoryRouter.route('/:id').get(getCatagoryByid).put(updateCatagory).delete(deleteCatagory)

module.exports={CatagoryRouter}