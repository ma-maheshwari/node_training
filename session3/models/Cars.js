const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year_launched: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model('Car',carSchema);

module.exports = Car;

