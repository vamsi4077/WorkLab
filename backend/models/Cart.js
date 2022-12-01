const mongoose = require("mongoose");
const cart_schema = mongoose.Schema({
    userId: {type: String, required: true},
    productIds: [String]
},
{timestamps: true});
module.exports = mongoose.model("Cart", cart_schema);