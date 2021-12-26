const express = require("express");
const app = express();
require("dotenv").config();

const router  = require("./routes");
const db = require("./helper/db");
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json());

db() // db connection
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
    app.use('/', router)
    
    // error messages and logs for other EPs.
    app.use((req, res, next) => {
        const error = new Error("There is no such EP")
        error.status = 404;
        next(error);
    });
    app.use(errorHandler)
})


