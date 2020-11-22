const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    english: String,
    japanese: String,
    chinese: String,
    french: String,
  },
  type: {
    type: [String],
    required: true,
  },
  base: {
    HP: {
      type: Number,
      required: true,
    },
    Attack: {
      type: Number,
      required: true,
    },
    Defense: {
      type: Number,
      required: true,
    },
    SpAttack: {
      type: Number,
      required: true,
    },
    SpDefense: {
      type: Number,
      required: true,
    },
    Speed: {
      type: Number,
      required: true,
    },
  },
  urlImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
