exports.getPokemonsController = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json({ success: true, data: pokemons });
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
};

exports.getPokemonController = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.paramas.id);
    res.status(200).json({ success: true, data: pokemon });
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
};
