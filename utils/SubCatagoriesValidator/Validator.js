const { check } = require("express-validator");
const {
  validatorMiddleware,
} = require("../../middlewares/validatorMiddleware");

exports.createSubValidator = [
  check("name")
    .notEmpty()
    .withMessage("You have to add a name")
    .isLength({ min: 3 })
    .withMessage("Your name is too short")
    .isLength({ max: 16 })
    .withMessage("Your name is too long"),
  check("Catagory")
    .isMongoId()
    .withMessage("You have to add an Id")
    .notEmpty()
    .withMessage("You have to add a name"),
  validatorMiddleware,
];
