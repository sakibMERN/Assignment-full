const CartItem = require("../model/cartItemModel");
const Order = require("../model/orderModel");
const User = require("../model/userModel");

exports.deleteUser = async(req, res) => {
     
     const userId = req.params.userId;

     try {
       // Find and delete the user
       const user = await User.findByIdAndDelete(userId);
   
       if (!user) {
         return res.status(404).json({ message: 'User not found' });
       }
   
       // Delete associated cart items
       await CartItem.deleteMany({ user: userId });
   
       // Delete associated orders
       await Order.deleteMany({ user: userId });
   
       res.status(200).json({ message: 'User and associated data deleted' });
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Server error' });
     }

}