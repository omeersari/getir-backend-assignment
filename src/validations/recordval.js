const Joi = require("Joi");

const recordValidation = Joi.object().keys({
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().greater(Joi.ref('startDate')).required(), // end date should be greater than startDate
    minCount: Joi.number().required().strict(),
    maxCount: Joi.number().required().strict()

})

module.exports = recordValidation