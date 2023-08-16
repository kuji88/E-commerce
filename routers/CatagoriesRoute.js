const express = require('express')
const {getCatagory,createCatagory} = require('../controllers/CatagoryController')


const CatagoryRouter = express.Router()

CatagoryRouter.route('/').get(getCatagory).post(createCatagory)

module.exports={CatagoryRouter}