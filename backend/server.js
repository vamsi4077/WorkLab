const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const auth_routes = require("./routes/auth.js");
const user_routes = require("./routes/user.js");
const product_routes = require("./routes/product.js");
const cart_routes = require("./routes/cart.js");
const order_routes = require("./routes/order.js");
const stripe_routes = require("./routes/stripe.js");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 5000;
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to mongodb")).catch((err)=>console.log("cannot connect to mongodb: "+err));
app.use('/api/auth', auth_routes);
app.use('/api/user', user_routes);
app.use('/api/product', product_routes);
app.use('/api/cart', cart_routes);
app.use('/api/order', order_routes);
app.use("/api/checkout", stripe_routes);
app.listen(port, (err, success)=>{
    if(err){
        console.log("Cannot listen to port "+port);
    }else{
        console.log("Server up and runnin' at port "+port);
    }
})