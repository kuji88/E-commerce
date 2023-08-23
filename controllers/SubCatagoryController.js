const slugify = require("slugify");
const aysncHandler = require("express-async-handler");
const SubModelSchema = require("../models/subCatagoryModel");
const { ApiError } = require("../utils/ApiError");

exports.getAllSubCatagories = aysncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  let objectFilter = {};
  if (req.params.catagoryID) {
    objectFilter = { catagory: req.params.catagoryID };
  }
  const Catagoriess = await SubModelSchema.find(objectFilter)
    .skip(skip)
    .limit(limit);

  res
    .status(200)
    .json({ results: Catagoriess.length, page: page, data: Catagoriess });
});

exports.getSubCatagoryByid = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const catagoryId = await SubModelSchema.findById(id);
  if (!catagoryId) {
    return next(new ApiError("Id not found", 404));
  }
  res.status(200).json({ data: catagoryId });
});

exports.createSubCatagory = aysncHandler(async (req, res, next) => {
  const { name, catagory } = req.body;
  const SubCatagory = await SubModelSchema.create({
    name,
    catagory,
    slug: slugify(name),
  });
  if (!SubCatagory) {
    return next(new ApiError("SubCatagory not found", 404));
  }
  res.status(200).json({ Data: SubCatagory });
});

exports.updateSubCatagory = aysncHandler(async (req, res, next) => {
  const { name, catagory } = req.body;
  const { id } = req.params;
  const SubCatagory = await SubModelSchema.findOneAndUpdate(
    { _id: id },
    { name: name, slug: slugify(name), catagory: catagory },
    { new: true }
  );
  if (!SubCatagory) {
    return next(new ApiError("Id is wrong", 404));
  }
  res.status(200).json({ Data: SubCatagory });
});

exports.deleteSubCatagory = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const SubCatagory = await SubModelSchema.findOneAndDelete(id);
  if (!SubCatagory) {
    return next(new ApiError("The id i wrong", 404));
  }
  res.status(200).json({ Data: "Deleted!" });
});
