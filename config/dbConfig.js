require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

const mongoURL = process.env.mongo_url;

mongoose.connect(mongoURL)
  .then(() => {
    console.log('MongoDB Connection Successful');
  })
  .catch((error) => {
    console.error('Error Connecting to Database:', error);
  });

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error Connecting to Database.');
});

connection.on('connected', () => {
  console.log('MongoDB Connection Successful');
});

module.exports = mongoose;
