const express = require("express");
const {
  getCatagory,
  createCatagory,
  getCatagoryByid,
  updateCatagory,
  deleteCatagory,
} = require("../controllers/CatagoryController");
const {
  createCatagoryValid,
  updateCatagoryValid,
  deleteCatagoryValid,
  getCatagoryValid,
} = require("../utils/CatagoriesValdiator/validator");
const { SubCatagoryRouter } = require("./SubCatagoryRoute");

const CatagoryRouter = express.Router();

CatagoryRouter.use("/:catagoryID/subCatagory", SubCatagoryRouter);

CatagoryRouter.route("/")
  .get(getCatagory)
  .post(createCatagoryValid, createCatagory);
CatagoryRouter.route("/:id")
  .get(getCatagoryValid, getCatagoryByid)
  .put(updateCatagoryValid, updateCatagory)
  .delete(deleteCatagoryValid, deleteCatagory);

module.exports = { CatagoryRouter };
