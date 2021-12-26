const express = require("express");
const app = express();
require("dotenv").config();

const router  = require("./routes");
const db = require("./helper/db");

app.use(express.json());

db() // db connection
app.listen(process.env.PORT, () => {
    app.use('/', router)
    console.log(`Listening on ${process.env.PORT}`)
})


