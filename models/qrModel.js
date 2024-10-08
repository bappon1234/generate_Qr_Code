const mongoose = require("mongoose");

const QRSchema = new mongoose.Schema({
    text: {
        type:String,
        required:true
    },
    qrCodeUrl:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("QrCode", QRSchema);