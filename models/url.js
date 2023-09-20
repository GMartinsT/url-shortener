const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
});

module.exports = mongoose.model("URL", urlSchema);
