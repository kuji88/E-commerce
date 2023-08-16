const express = require('express')
const catagoryController = require('../controllers/CatagoryController')


const CatagoryRouter = express.Router()

CatagoryRouter.post('/', catagoryController)

module.exports={CatagoryRouter}