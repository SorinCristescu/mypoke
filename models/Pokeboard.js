const mongoose = require('mongoose');

const PokeboardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  pokemons: [
    {
      _id: {
        type: String,
        required: true,
      },
      name: String,
      type: {
        type: [String],
        required: true,
      },
      urlImage: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Pokeboard', PokeboardSchema);
