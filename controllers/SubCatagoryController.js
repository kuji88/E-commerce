const slugify = require("slugify");
const aysncHandler = require("express-async-handler");
const SubCatagoryModel = require("../models/subCatagoryModel");
const { ApiError } = require("../utils/ApiError");

exports.createSubCatagory = aysncHandler(async (req, res, next) => {
  const { name, Catagory } = req.body;
  const SubCatagory = await SubCatagoryModel.create({
    name,
    Catagory,
    slug: slugify(name),
  });
  if (!SubCatagory) {
    return next(new ApiError("SubCatagory not found", 404));
  }
  res.status(200).json({ Data: SubCatagory });
});
