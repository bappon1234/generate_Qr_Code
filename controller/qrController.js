const express = require("express");
const QrCode = require('../models/qrModel');
const router = express.Router();
const qr = require('qrcode'); // Import qrcode library

// POST /QrCode/generate
router.post('/generate', async (req, res) => {
    try {
        const { text } = req.body;
        
        // Generate QR code URL
        const qrCodeUrl = await qr.toDataURL(text);

        // Save the QR code to MongoDB
        const newQrCode = new QrCode({ text, qrCodeUrl });
        await newQrCode.save();

        // console.log("QR code generated URL:", qrCodeUrl);

        res.status(201).json({ message: 'QR code generated successfully', qrCodeUrl });
    } catch (err) {
        res.status(500).json({ error: 'Error generating QR code' });
    }
});

module.exports = router;
