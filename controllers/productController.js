const aysncHandler = require("express-async-handler");
const slugify = require("slugify");
const { ApiError } = require("../utils/ApiError");
const productModel = require("../models/productModel");

exports.getProducts = aysncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const product = await productModel.find({}).skip(skip).limit(limit);
  res
    .status(200)
    .json({ page: page, count: product.length, products: product });
});

exports.createProducts = aysncHandler(async (req, res, next) => {
  const { title, description, quantity, price, imageCover, category } =
    req.body;
  const newProduct = productModel.create({
    title: title,
    description: description,
    quantity: quantity,
    price: price,
    imageCover: imageCover,
    category: category,
    slug: slugify(title),
  });
  if (!newProduct) {
    next(new ApiError("Cannot find the the new product", 404));
  }
  res.json(200).json({
    data: newProduct,
  });
});

exports.getOneProduct = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const theProduct = await productModel.findById(id);
  if (!theProduct) {
    next(new ApiError("cannot find the product"), 404);
  }
  res.status(200).json(theProduct);
});

exports.updateProduct = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;
  const theProduct = await productModel.findOneAndUpdate(
    { _id: id },
    { title: title },
    { new: true }
  );
  if (!theProduct) {
    next(new ApiError("cannot find the product", 404));
  }
  res.status(200).json({
    data: theProduct,
  });
});

exports.deleteProduct = aysncHandler(async (req, res, next) => {
  const { id } = req.params;
  const theProduct = productModel.findByIdAndDelete(id);
  if (!theProduct) {
    next(new ApiError("cannot find the product", 404));
  }
  res.status(200).json("The product has deleted!");
});
