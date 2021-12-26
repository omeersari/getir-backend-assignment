const httpStatus = require("http-status");

const validate = (schema) => (req, res, next) => {
  const { body } = req
  const { value, error } = schema.validate(body);

  if (error) {
    const errorMessage = error?.details?.map((detail) => detail?.message).join(", ");
    return res.status(httpStatus.BAD_REQUEST).send({ error: errorMessage });
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;