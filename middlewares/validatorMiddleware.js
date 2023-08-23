const { validationResult } = require("express-validator");

exports.validatorMiddleware = (req, res, next) => {
  const result = validationResult(req);
  if (!result) {
    return res.status(404).json({ errorr: result });
  }
  next();
};
