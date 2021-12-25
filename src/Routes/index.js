const express = require("express");
const { postMethod } = require("../controllers");

const router = express.Router();

router.route("/").post(postMethod); // "localhost:3000" is going to call postMethod function to make a post request.

module.exports = router;