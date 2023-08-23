const express = require("express");
const {
  createSubCatagory,
  getAllSubCatagories,
  getSubCatagoryByid,
  updateSubCatagory,
  deleteSubCatagory,
} = require("../controllers/SubCatagoryController");
const {
  createSubValidator,
  getSubValidator,
  updateSubValidator,
  DeleteSubValidator,
} = require("../utils/SubCatagoriesValidator/Validator");

const SubCatagoryRouter = express.Router({ mergeParams: true });

SubCatagoryRouter.route("/")
  .post(createSubValidator, createSubCatagory)
  .get(getAllSubCatagories);

SubCatagoryRouter.route("/:id")
  .get(getSubValidator, getSubCatagoryByid)
  .put(updateSubValidator, updateSubCatagory)
  .delete(DeleteSubValidator, deleteSubCatagory);

module.exports = { SubCatagoryRouter };
