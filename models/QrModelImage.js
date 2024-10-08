const mongoose = require("mongoose");

const QRImageSchema = new mongoose.Schema({
    imageUrl: { // Field for the uploaded image
        type: String,
        required: true
    },
    qrCodeUrl: { // Field for the generated QR code
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("QrCodeImage", QRImageSchema);
