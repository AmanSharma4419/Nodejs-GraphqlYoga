const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  isActive: { type: Boolean, default: true },
});

projectSchema.statics.ActiveProjects = function (callback) {
  this.find({ isActive: "false" }, callback);
};

module.exports = mongoose.model("Project", projectSchema);
