const mongoose = require("mongoose");
const { model } = mongoose;


// schema that will match with the data in mongoDB.
const recordSchema = mongoose.Schema(
  {
    key: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, trim: true },
    counts: { type: Array, required: true },
  },
  {
    timestapms: true,
  }
);

const record = model("records", recordSchema);
module.exports = record
