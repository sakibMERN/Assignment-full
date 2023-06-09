const express = require('express');
const { allProducts } = require('../controllers/product');
const router = express.Router();





router.get("/product", allProducts);




module.exports = router;