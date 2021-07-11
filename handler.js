'use strict';
const db = require('./db');
const mongoose = require('mongoose');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.mongo = async (event) => {
  try {
    // Get an instance of our database
    await db();

    // Define model
    const users =
      mongoose.models.user ||
      mongoose.model('user', new mongoose.Schema({ name: String }));

    // Make a MongoDB MQL Query to go into the movies collection and return the first 20 movies.
    const user = await users.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Mongo User',
          userResult: user,
        },
        null,
        2
      ),
    };
  } catch (err) {
    console.log(`The error is ${err}`);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Error message and stcak is show below!',
          errMessage: JSON.stringify(err.message),
          errStack: err.stack,
        },
        null,
        2
      ),
    };
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.proxy = (event, context, callback) =>
  Promise.resolve(event)
    .then(() =>
      callback(null, {
        statusCode: 302,
        headers: {
          Location: 'https://openweatherapp-react.netlify.app/',
        },
      })
    ) // Success!
    .catch(callback); // Fail function with error
