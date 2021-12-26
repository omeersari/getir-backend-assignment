const logger = require("../logger/error");

module.exports = (error, req, res, next) => {
  logger.log({
    level: "error",
    message: {
      status: error.status || 500,
      message: error.message || "Internal Server Error....",
    },
  });

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Internal Server Error....",
    },
  });
};