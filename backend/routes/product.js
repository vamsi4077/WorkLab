const { verifyToken } = require("./verifyToken");
const router = require("express").Router();
const Product = require('../models/Product.js');

router.post('/addproduct', verifyToken, async (req, res)=>{
    const new_product = Product({
        user_id: req.user.id,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        categories: req.body.categories,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price
    });
    console.log(new_product);
    try{
        const saved_product = await new_product.save();
        res.status(200).json(saved_product);
    }catch(err){
        res.status(500).json(err);
    }
});
router.put('/update/:productid', verifyToken, async (req, res)=>{
     try{
        const updated_product = await Product.findByIdAndUpdate(req.params.productid, req.body);
        res.status(200).json(updated_product);
     }catch(err){
        res.status(500).json(err);
     }
});
router.delete('/delete/:productid', verifyToken, async (req, res)=>{
    try{
       await Product.findByIdAndDelete(req.params.productid);
       res.status(200).json('Product has been deleted');
    }catch(err){
       res.status(500).json(err);
    }
});
router.get('/find/:productid', async (req, res)=>{
    try{
        const product = await Product.findById(req.params.productid);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
});
router.get("/getall", async (req, res) => {
    const q_new = req.query.new;
    const q_category = req.query.category;
    try {
      let products;
  
      if (q_new) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (q_category) {
        products = await Product.find({
          categories: {$all: q_category}
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;