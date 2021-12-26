const express = require("express");
const { postMethod } = require("../controllers");
const recordVal = require("../validations/recordval");
const validateRec = require("../middlewares/validate");
const router = express.Router();

router.route("/").post(validateRec(recordVal), postMethod); // "localhost:3000" is going to validate record item first and if true call postMethod function to make a post request.

module.exports = router;