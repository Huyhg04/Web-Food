const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema ({
    id: {type: ObjectId},
    name: String,
    address: String,
    phone: String,
    email: String,
    username: String,
    password: String,
    role: Number
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);