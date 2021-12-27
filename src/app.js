const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const router  = require("./routes");
const db =  require("./helper/db");
require("dotenv").config();


app.use(express.json());

db.connectToMongo() // db connection

const server = app.listen(process.env.PORT, () => {
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

module.exports = server
