const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
name: {
  type: String, 
  required: true
  },
adress: {
  type: String,
   required: true
   },
phone: {
  type: String,
  required: true
  },
  movies : [{
    type: Schema.Types.ObjectId, 
    ref: "Movie", 
    required: true 
  }],
  is_active: {
      type: Boolean,
      default: true
  }
}, { "collection": "cinemas", "timestamps": true });


module.exports = mongoose.model("Cinema", CinemaSchema);
