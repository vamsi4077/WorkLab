const router = require("express").Router();
const {verifyToken} = require('./verifyToken.js');
const Cart = require('../models/Cart.js');
router.post('/addcart', async (req, res)=>{
    try{
        const new_cart = Cart({
            userId: req.user.id,
            productIds: req.body.product_ids
        });
        const saved_cart = await new_cart.save();
        res.status(200).json(saved_cart);
    }catch(err){
        res.status(500).json(err);
    }
});
router.put("/updatecart/:id", verifyToken, async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
            userId: req.user.id,
            productIds: req.body.product_ids
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.delete("/deletecart/:id", verifyToken, async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/find/:userId", verifyToken, async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;