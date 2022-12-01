const mongoose = require("mongoose");
const product_schema = mongoose.Schema({
    user_id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    categories: {type: Array},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true}

},
{timestamps: true});
module.exports = mongoose.model("Product", product_schema);