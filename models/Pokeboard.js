const mongoose = require('mongoose');

const PokeboardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  language: {
    type: String,
    default: 'english',
  },
  pokemons: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: String,
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
    },
  ],
});

module.exports = mongoose.model('Pokeboard', PokeboardSchema);
