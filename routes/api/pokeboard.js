const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// IMPORT CONTROLLERS
// ==================
const {
  addPokemonValidation,
  addPokemon,
  deletePokemon,
  // getPokeboard,
  createOrUpdatePokeboard,
  getPokemon,
} = require('../../controllers/pokeboard');

// ROUTES
// ======
// @route Get api/v1/pokeboard
// @desc Get user pokeboard
// @access  Private
// router.get('/', auth, getPokeboard);

// @route POST api/v1/pokeboard
// @desc Create or update user pokeboard
// @access  Private
router.post('/', auth, createOrUpdatePokeboard);

// @route PUT api/v1/user/pokeboard
// @desc Add pokemon to user pokeboard
// @access  Private
router.put('/pokemons', auth, addPokemon);

// @route DELETE api/v1/user/pokeboard/:pokemonId
// @desc Delete pokemon from user pokeboard
// @access  Private
router.delete('/pokemons/:id', auth, deletePokemon);

// @route GET api/v1/pokemons/:id
// @desc Get pokemon by id
// @access  Private
router.get('/pokemons/:id', auth, getPokemon);

module.exports = router;
