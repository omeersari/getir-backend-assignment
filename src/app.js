const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const router  = require("./routes");
const db = require("./helper/db");
require("dotenv").config();

const app = express();
app.use(express.json());

db() // db connection
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
    app.use('/api', router)
    
    // error messages and logs for other EPs.
    app.use((req, res, next) => {
        const error = new Error("There is no such EP")
        error.status = 404;
        next(error);
    });
    app.use(errorHandler)
})


