const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;

//Create connection (async)
module.exports = async () => {
  try {
    let connection = await mongoose.connect(DATABASE_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (err) {
    throw err;
  }
};
