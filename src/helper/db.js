const mongoose = require('mongoose');

const connectToMongo = () => {
    return mongoose.connect(process.env.DB_URL), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
}

module.exports = connectToMongo