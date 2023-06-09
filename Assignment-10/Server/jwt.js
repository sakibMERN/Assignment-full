// JWT Token Generation Function

const jwt = require('jsonwebtoken');

function generateToken(userId, secretKey) {

    const payload = { userId };

    const options = { expiresIn: '8h' };

    const token = jwt.sign(payload, secretKey, options);

    return token;
};

generateToken(1234, '123abc123');


// Express.js Middleware for JWT Token Authentication:

