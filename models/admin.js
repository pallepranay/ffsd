// Admin Schema for login and signup

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminschema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})

const admin = mongoose.model('Admin', adminschema);
module.exports = admin;
