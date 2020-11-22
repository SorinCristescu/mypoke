const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

// Load env vars
require('dotenv').config({
  path: './config/config.env',
});
console.log(process.env.MONGO_URI);
// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Load models
const Pokemon = require('./models/Pokemon');

// Read JSON files
const pokemons = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/pokemons.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Pokemon.create(pokemons);

    console.log('Data imported...'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const deleteData = async () => {
  try {
    await Pokemon.deleteMany();

    console.log('Data destroyed...'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Commands in terminal for import and delete data from _data/pokemons file
// node seeder -i
// node seeder -d
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
