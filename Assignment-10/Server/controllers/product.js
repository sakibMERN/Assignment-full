
const ProductList = require("../models/productModel")

exports.allProducts = async (req,res,next) =>{

    try {

        const products = await ProductList.find({}, 'name price');
        res.json(products);

    } 
    catch(error){
        res.status(500).json({message:'Internal server error'})
    }


};