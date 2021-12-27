const mongoose = require('mongoose');

const connectToMongo = () => {
    return mongoose.connect(process.env.DB_URL), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
}

const disconnetToMongo = async () => {
    return await mongoose.disconnect()
}

module.exports = {
  connectToMongo,
  disconnetToMongo
}