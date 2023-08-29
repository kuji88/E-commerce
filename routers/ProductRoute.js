const express = require("express");
const {
  getProducts,
  createProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const {
  createProductValidator,
  getProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require("../utils/ProuductsValidator/validator");

const ProductRouter = express.Router();

ProductRouter.route("/")
  .get(getProducts)
  .post(createProductValidator, createProducts);

ProductRouter.route("/:id")
  .get(getProductValidator, getOneProduct)
  .put(updateProductValidator, updateProduct)
  .delete(deleteProductValidator, deleteProduct);

module.exports = ProductRouter;
