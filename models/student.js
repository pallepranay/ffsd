// Student Schema for login and signup

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentschema = new Schema({
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

const student = mongoose.model('Student', studentschema);
module.exports = student;

