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

function authenticate(req, res, next){
    const token = req.headers.authorization;

    if (!token){
        return res.status(401).json({message: 'Unauthorized'});
    };


    const secretKey = process.env.SECRET_KEY;

    try {
        const decoded = jwt.verify(token, secretKey);

        req.user = decoded;

        next();
    }catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    };
};