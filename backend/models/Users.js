const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    email: String,
    password: String,
})
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;