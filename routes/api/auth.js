const express = require('express');
const router = express.Router();

// IMPORT CONTROLLERS
// ==================
const {
  registerValidation,
  register,
  authUser,
  loginValidation,
  login,
} = require('../../controllers/auth.js');

// IMPORT MIDDLEWARE
// =================
const auth = require('../../middleware/auth');

// ROUTES
// ======

// @route POST api/v1/register
// @desc Register user
// @access  Public
router.post('/register', registerValidation, register);

// @route GET api/v1/auth
// @desc Get verifed user
// @access  Private
router.get('/', auth, authUser);

// @route POST api/v1/auth
// @desc Authenticate user & get token
// @access  Public
router.post('/login', loginValidation, login);

module.exports = router;
