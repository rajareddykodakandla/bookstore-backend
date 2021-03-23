const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    Bid:{
        type:Number,
        trim:true,
        required:true
    },
    title:{
        type:String,
        trim:true,
        maxlength:45,
        required:true
    },
    author:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
}, {timestamps: true})

module.exports = mongoose.model("books", booksSchema)