const express = require("express");
const app = express();

const router  = require("./routes");

app.use(express.json());

app.listen("6161", () => {
    app.use('/', router)
})
