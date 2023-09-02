const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

//env config

dotenv.config();

// Import router
const userRouter = require('./routes/userRouter');

//Rest object
const app = express();

// Set up middleware

app.use(cors());
app.use(express.json());
app.use(morgan());
app.use(helmet());


// Routes
app.use("/api/v1/user", userRouter);

// Start your Express app
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
