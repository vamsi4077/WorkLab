const mongoose = require("mongoose");
const order_schema = mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {
            productId: {
                type: String,
            },
        }
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: "pending"},
},
{timestamps: true});
module.exports = mongoose.model("Order", order_schema);