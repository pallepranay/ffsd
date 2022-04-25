const req = require("express/lib/request");

const mongoose=module.require('mongoose');
const schema=mongoose.Schema;

const courseschema=new schema({
    Title:{
        type:String,
        required:true
    },
    Pname:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Rating:{
        type:String,
        required:true
    },
    Desc:{
        type:String,
        required:true
    },
    Cdetails:{
        type:[{
            type:String
        }]
    },
    image:{
        type:String
    }

},{timestamps:true});

const facultydata=mongoose.model('faculty-datas',courseschema);
module.exports=facultydata;

