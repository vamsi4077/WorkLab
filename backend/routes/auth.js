const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post('/signup', async (req, res)=>{
    var hashed_password;
    await bcrypt.hash(req.body.password, 8).then(function(hash) {
        hashed_password = hash;
    });
    var new_user = User({
        username: req.body.username,
        email: req.body.email,
        password: hashed_password
    });
    try{
        var saved_user = await new_user.save();
        res.status(201).json(saved_user);
    }catch(err){
        res.status(500).json(err);
    }
});
router.post('/signin', async (req, res)=>{
    try{
        var user = await User.findOne({
            username: req.body.username
        });
        !user && res.status(401).json("User with the entered username not found");
        var hashed_password = user.password;
        bcrypt.compare(req.body.password, hashed_password).then((result)=>{
            if(result==true){
                const accessToken = jwt.sign({
                    id: user._id
                },
                process.env.JWT_SECRET_KEY,
                {expiresIn:"1d"}
                );
                res.status(200).json(accessToken);
            }
            else{
                res.status(401).json("password wrong!");
            }
        });
    }catch(err){
        console.log(err);
    }
});
module.exports = router;