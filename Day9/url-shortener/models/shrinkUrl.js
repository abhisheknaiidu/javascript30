const mongoose = require('mongoose');
const shortId = require('shortid');


const ShrinkUrl = mongoose.model('ShrinkUrl', new mongoose.Schema({
    email:{
        type: String,
        required: false
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl:{
        type:String,
        required: true,
        default: shortId.generate
    },
    createdAt: {
        type: Date,
        required: false,
    },
    clicks: {
        type: Number,
        required : false,
        default:0
    }
}))

exports.ShrinkUrl = ShrinkUrl

