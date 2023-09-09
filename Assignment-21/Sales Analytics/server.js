const express = require('express');
const mongoose = require('mongoose');
const Sale = require('./models/sale'); // Import your Mongoose model

const app = express();
const port = process.env.PORT || 8080; // Choose a port

mongoose.connect('mongodb://localhost/sales', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define your API routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
