const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const salesRouter = require('./routes/salesRoutes');


// Load environment variables from a .env file (if available)
dotenv.config();

// Create an instance of Express
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.use('/api/sales', salesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
