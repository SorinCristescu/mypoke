const User = require('../models/User');
const Pokeboard = require('../models/Pokeboard');
const Pokemon = require('../models/Pokemon');
const { check, validationResult } = require('express-validator');

// GET POKEBOARD
// =============
// exports.getPokeboard = async (req, res) => {
//   try {
//     const pokeboard = await Pokeboard.findOne({
//       user: req.user.id,
//     }).populate('user', ['name', 'avatar']);

//     if (!pokeboard) {
//       return res
//         .status(400)
//         .json({ msg: 'There is no pokeboard for this user.' });
//     }

//     res.status(200).json(pokeboard);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// CREATE OR UPDATE POKEBOARD
// ==========================

exports.createOrUpdatePokeboard = async (req, res) => {
  // Build pokeboardFields

  pokeboardFields = {};
  pokeboardFields.user = req.user.id;

  try {
    let pokeboard = await Pokeboard.findOne({
      user: req.user.id,
    });

    if (pokeboard) {
      // Update
      pokeboard = await Pokeboard.findOneAndUpdate(
        { user: req.user.id },
        { $set: pokeboardFields },
        { new: true }
      );
      return res.json(pokeboard);
    }
    // Create

    pokeboard = new Pokeboard(pokeboardFields);

    await pokeboard.save();

    res.status(200).json(pokeboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: 'Server Error.' }] });
  }
};

// ADD POKEMON TO POKEBOARD
// ========================

exports.addPokemon = async (req, res) => {
  const pokemon = req.body;
  // const { id, type, name, urlImage } = req.body;
  try {
    const pokeboard = await Pokeboard.findOne({ user: req.user.id });
    // const user = await User.findById(req.user.id);
    // let results = Object.keys(pokemon.name).map((key) => ({
    //   language: String(key),
    //   translation: pokemon.name[key],
    // }));
    // let newName = results
    //   .filter((result) => result.language === user.language)
    //   .map((item) => item.translation)[0];

    // const newPokemon = {
    //   id,
    //   type,
    //   urlImage,
    //   name,
    // };

    pokeboard.pokemons.push(pokemon);

    await pokeboard.save();
    res.status(200).json(pokeboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: 'Server Error.' }] });
  }
};

// DELETE POKEMON FROM POKEBOARD
// =============================
exports.deletePokemon = async (req, res) => {
  try {
    const pokeboard = await Pokeboard.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = pokeboard.pokemons
      .map((item) => item._id)
      .indexOf(req.params.id);

    pokeboard.pokemons.splice(removeIndex, 1);

    await pokeboard.save();

    res.status(200).json(pokeboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: 'Server Error.' }] });
  }
};

// GET POKEMON BY ID
// =================
exports.getPokemon = async (req, res) => {
  try {
    const pokeboard = await Pokeboard.findOne({ user: req.user.id });

    const pokemon = await Pokemon.findById(req.params.id);
    // const pokemonIndex = pokemons
    //   .map((item) => item._id)
    //   .indexOf(req.params.id);

    // const pokemon = pokemons[pokemonIndex];

    // console.log(pokemon);
    if (!pokemon) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'There is no pokemon with this ID.' }] });
    }
    res.status(200).json(pokemon);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ errors: [{ msg: 'Server Error.' }] });
  }
};
