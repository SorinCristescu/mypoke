const User = require('../models/User');
const Pokeboard = require('../models/Pokeboard');
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

  if (req.body.language) pokeboardFields.language = req.body.language;

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
    res.status(500).send('Server error');
  }
};

// ADD POKEMON TO POKEBOARD
// ========================

exports.addPokemon = async (req, res) => {
  const pokemon = req.body;
  // const name = pokemon.name[language];
  // const newPokemon = {
  //   id,
  //   type,
  //   base,
  //   urlImage,
  //   name,
  // };
  try {
    const pokeboard = await Pokeboard.findOne({ user: req.user.id });

    pokeboard.pokemons.push(pokemon);

    await pokeboard.save();
    res.status(200).json(pokeboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
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
    res.status(500).send('Server Error');
  }
};

// GET POKEMON BY ID
// =================
exports.getPokemon = async (req, res) => {
  try {
    const pokeboard = await Pokeboard.findOne({ user: req.user.id });

    const pokemonIndex = pokeboard.pokemons
      .map((item) => item._id)
      .indexOf(req.params.id);

    const pokemon = pokeboard.pokemons[pokemonIndex];

    if (!pokemon) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json(pokemon);
  } catch (err) {
    console.error(err.message);
    res.status(400).send({ success: false });
  }
};
