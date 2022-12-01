const router = require("express").Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {
    verifyToken
} = require('./verifyToken.js');
router.put('/updatepassword',verifyToken, async (req, res)=>{
    try{
        var hashed_password;
        await bcrypt.hash(req.body.password, 8).then(function(hash) {
            hashed_password = hash;
        });
        var updated_user = await User.findByIdAndUpdate(req.user.userid, {password: hashed_password});
        res.status(200).json(updated_user);        
    }
    catch(err){
        res.status(500).json(err);
    }
});
router.delete("/delete", verifyToken, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.user.userid);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;