const express = require('express');
const router = express.Router();

// IMPORT CONTROLLERS
// ==================
const {
  registerValidation,
  registerController,
  authController,
  //   activationController,
  loginValidation,
  loginController,
  //   forgotPasswordController,
  //   resetPasswordController,
  //   googleController,
  //   facebookController,
} = require('../../controllers/auth.js');

// IMPORT MIDDLEWARE
// =================
const auth = require('../../middleware/auth');

// ROUTES
// ======

// @route POST api/v1/register
// @desc Register user
// @access  Public
router.post('/register', registerValidation, registerController);

// @route GET api/v1/auth
// @desc Get verifed user
// @access  Private
router.get('/auth', auth, authController);

// @route POST api/v1/auth
// @desc Authenticate user & get token
// @access  Public
router.post('/login', loginValidation, loginController);

// @route GET api/v1/auth
// @desc Get verifed user
// @access  Public
// router.post('/activation', activationController);

// @route GET api/v1/auth
// @desc Get verifed user
// @access  Public
// router.put(
//   '/forgotpassword',
//   forgotPasswordValidator,
//   forgotPasswordController
// );

// @route GET api/v1/auth
// @desc Get verifed user
// @access  Public
// router.put('/resetpassword', resetPasswordValidator, resetPasswordController);

// Google and Facebook login routes
// router.post('/googlelogin', googleController);
// router.post('/facebooklogin', facebookController);

module.exports = router;
