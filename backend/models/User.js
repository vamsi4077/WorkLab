const mongoose = require("mongoose");
const user_schema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

},
{timestamps: true});
module.exports = mongoose.model("User", user_schema);