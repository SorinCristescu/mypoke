const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');

// CONFIG DOTENV
// =============
require('dotenv').config({
  path: './config/config.env',
});

const app = express();

// CONNECT TO DATABASE
// ===================
connectDB();

// MIDDLEWARE
// ==========
app.use(express.json({ extended: false }));

// Config for dev middleware
// Morgan provide information about each request
// Cors allow to deal with react for localhost at port 3000
if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan('dev'));
}

// MOUNT ROUTES
// ============
const authRouter = require('./routes/api/auth');
const pokeboardRouter = require('./routes/api/pokeboard');
const pokemonsRouter = require('./routes/api/pokemons');

// SERVING STATIC FILES
// ====================
app.use(express.static('public'));

// USE ROUTES
// ==========
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/pokeboard', pokeboardRouter);
app.use('/api/v1/pokemons', pokemonsRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    msg: 'Page not founded.',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
