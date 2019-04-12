const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
tittle: {
  type: String, 
  required: true
  },
actor: {
  type: String,
   required: true
   },
director: {
  type: String,
  required: true
  },
country: {
    type: String,
    required: true
  },
classification: {
  type: String,
  required: true
  },
  year: {
      type: Number,
      required: true
  },
  duration: {
      type: Number,
      required: true
  },
  genre: {
      type: String,
      required: true
  },
  synopsis: {
      type: String
  },
  image: {
      type: String
  },
  is_active: {
      type: Boolean,
      default: true
  }
}, { "collection": "movies", "timestamps": true });


module.exports = mongoose.model("Movie", MovieSchema);
