//  Add your code here
const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: {
    type: String,
  },
  celebritiesId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Celebrity" }],
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
