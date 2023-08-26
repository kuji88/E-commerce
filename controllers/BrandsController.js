const slugify = require("slugify");
const aysncHandler = require("express-async-handler");
const barndsModel = require("../models/brands");
const { ApiError } = require("../utils/ApiError");

//@Gbrand   /api/v1/
//@Access               public
exports.getbrand = aysncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const brands = await barndsModel.find({}).skip(skip).limit(limit);

  res.status(200).json({ results: brands.length, page: page, data: brands });
});

//@Get one brand by id   /api/v1/:id
//@Access                   public
exports.getbrandByid = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const brandId = await barndsModel.findById(id);
  if (!brandId) {
    return next(new ApiError("Id not found", 404));
  }
  res.status(200).json({ data: brandId });
});

//@Create Cabrand   /api/v1/
//@Access              Private
exports.createbrand = aysncHandler(async (req, res) => {
  const { name } = req.body;
  await barndsModel.create({ name, slug: slugify(name) }).then((cata) => {
    res.status(200).json({ data: cata });
  });
});

//@Update a brand   /api/v1/id:
//@Access                  Private
exports.updatebrand = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const change = await barndsModel.findOneAndUpdate(
    { _id: id },
    { name: name, slug: slugify(name) },
    { new: true }
  );
  if (!change) {
    return next(new ApiError("Id not found", 404));
  }
  res.status(200).json({ date: change });
});

//@Delete a brand  /api/v1/id:
//@Access                  Private
exports.deletebrand = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedBrand = await barndsModel.findOneAndDelete(id);
  if (!deletedBrand) {
    return next(new ApiError("Id not found", 404));
  }
  res.status(200).json({ Message: "The brand deleted" });
});
