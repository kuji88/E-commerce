const express = require("express");
const {
  getbrand,
  getbrandByid,
  deletebrand,
  updatebrand,
  createbrand,
} = require("../controllers/BrandsController");
const {
  createBrandsValid,
  getBrandsValid,
  updateBrandValid,
  deleteBrandValid,
} = require("../utils/BrandsValidatior/validator");
const { SubCatagoryRouter } = require("./SubCatagoryRoute");

const BrandsRouter = express.Router();

BrandsRouter.use("/:catagoryID/subCatagory", SubCatagoryRouter);

BrandsRouter.route("/").get(getbrand).post(createBrandsValid, createbrand);
BrandsRouter.route("/:id")
  .get(getBrandsValid, getbrandByid)
  .put(updateBrandValid, updatebrand)
  .delete(deleteBrandValid, deletebrand);

module.exports = { BrandsRouter };
