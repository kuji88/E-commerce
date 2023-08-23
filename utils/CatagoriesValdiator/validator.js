const { check } = require("express-validator");
const {
  validatorMiddleware,
} = require("../../middlewares/validatorMiddleware");

exports.getCatagoryValid = [
  check("id").isMongoId().withMessage("invalid catagory"),
  validatorMiddleware,
];

exports.createCatagoryValid = [
  check("name")
    .notEmpty()
    .withMessage("You have to add name")
    .isLength({ min: 3 })
    .withMessage("Your name is too short")
    .isLength({ max: 16 })
    .withMessage("Your name is too long"),
  validatorMiddleware,
];

exports.updateCatagoryValid = [
  check("id")
    .isMongoId()
    .withMessage("invalid catagory")
    .isLength({ min: 3 })
    .withMessage("Your name is too short")
    .isLength({ max: 32 })
    .withMessage("Your name is too long"),
  validatorMiddleware,
];

exports.deleteCatagoryValid = [
  check("id").isMongoId().withMessage("invalid catagory"),
  validatorMiddleware,
];
