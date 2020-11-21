const express = require('express');
const router = express.Router();

// IMPORT CONTROLLERS
// ==================
const {
  getPokemonsController,
  getPokemonController,
} = require('../../controllers/pokemons.js');

// ROUTES
// ======

// @route GET api/v1/pokemons
// @desc Get all pokemons
// @access  Public
router.get('/pokemons', getPokemonsController);

// @route GET api/v1/pokemons/:id
// @desc Get pokemon by id
// @access  Public
router.get('/pokemons/:id', getPokemonController);

module.exports = router;
