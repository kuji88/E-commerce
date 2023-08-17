const {validationResult} = require('express-validator')


exports.validatorMiddleware = (req,res,next)=>{
    const result = validationResult(req);
    if(!result.isEmpty()) {
      return res.status(404).json({error: result})
    }
    next()
    }

