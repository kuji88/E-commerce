const express = require('express')
const {getCatagory,createCatagory, getCatagoryByid} = require('../controllers/CatagoryController')


const CatagoryRouter = express.Router()

CatagoryRouter.route('/').get(getCatagory).post(createCatagory)
CatagoryRouter.get('/:id',getCatagoryByid)

module.exports={CatagoryRouter}