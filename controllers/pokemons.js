const Pokemon = require('../models/Pokemon');
const User = require('../models/User');

// GET ALL POKEMONS
// ================
exports.getAllPokemons = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const pokemons = await Pokemon.find();

    const allPokemons = pokemons.map((pokemon) => {
      const { id, type, urlImage } = pokemon;

      let results = Object.keys(pokemon.name).map((key) => ({
        language: String(key),
        translation: pokemon.name[key],
      }));

      let newName = results
        .filter((result) => result.language === user.language)
        .map((item) => item.translation)[0];

      return {
        id,
        type,
        name: newName,
        urlImage,
      };
    });

    res.status(200).json(allPokemons);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: 'Server Error.' }] });
  }
};
