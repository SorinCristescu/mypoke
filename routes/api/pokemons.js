const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// IMPORT CONTROLLERS
// ==================
const { getAllPokemons } = require('../../controllers/pokemons');

// ROUTES
// ======
// @route Get api/v1/pokemons
// @desc Get all pokemons
// @access  Private
router.get('/', auth, getAllPokemons);

module.exports = router;
