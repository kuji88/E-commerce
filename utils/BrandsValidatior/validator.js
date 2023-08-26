const { check } = require("express-validator");
const {
  validatorMiddleware,
} = require("../../middlewares/validatorMiddleware");

exports.getBrandsValid = [
  check("id").isMongoId().withMessage("invalid Brand"),
  validatorMiddleware,
];

exports.createBrandsValid = [
  check("name")
    .notEmpty()
    .withMessage("You have to add name")
    .isLength({ min: 3 })
    .withMessage("Your name is too short")
    .isLength({ max: 16 })
    .withMessage("Your name is too long"),
  validatorMiddleware,
];

exports.updateBrandValid = [
  check("id")
    .isMongoId()
    .withMessage("invalid Brands")
    .isLength({ min: 3 })
    .withMessage("Your name is too short")
    .isLength({ max: 32 })
    .withMessage("Your name is too long"),
  validatorMiddleware,
];

exports.deleteBrandValid = [
  check("id").isMongoId().withMessage("invalid Brand"),
  validatorMiddleware,
];
