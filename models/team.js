const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model("Team", teamSchema);
