const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema({
  //_id: Primary Key
  year: Number,
  month: Number,
  date: Number,
  program: String,
  order: Number,
  plan: [String],
  practice: [String],
  images: [String],
  modifyDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("diary", DiarySchema);
