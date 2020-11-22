const Pokemon = require('../models/Pokemon');

// GET ALL POKEMONS
// ================
exports.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();

    res.status(200).json(pokemons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
