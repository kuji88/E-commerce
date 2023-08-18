const express = require("express");
const { createSubCatagory } = require("../controllers/SubCatagoryController");
const {
  createCatagoryValid,
} = require("../utils/CatagoriesValdiator/validator");

const SubRoute = express.Router();

SubRoute.route("/").post(createCatagoryValid, createSubCatagory);

module.exports = { SubCatagory: SubRoute };
