const mongoose = require("mongoose");

const empSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      min: 12000,
      max: 55000,
      required: true,
    },
    dept: {
      type: String,
      enum: ["IT", "HR", "Sales"],
      required: true,
    },
  },
  { timeStamps: true },
);

const empModel = mongoose.model("emp", empSchema);

module.exports = empModel;
