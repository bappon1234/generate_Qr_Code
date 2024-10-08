const express = require("express");
const QrCode = require('../models/QrModelImage');
const router = express.Router();
const qr = require('qrcode'); // Import qrcode library
const multer = require('multer'); // Import multer for image upload
const path = require('path');

// Configure Multer for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Upload folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save with timestamp
    }
});

const upload = multer({ storage });

// Serve static files from the 'uploads' folder
router.use('/uploads', express.static('uploads'));

// POST /QrCode/image/generate with image upload and QR code generation
router.post('/generate', upload.single('image'), async (req, res) => {
    try {
        const image = req.file;
        const { text } = req.body; // Get text from the request body

        if (!image) {
            return res.status(400).json({ error: 'No image uploaded' });
        }

        if (!text) {
            return res.status(400).json({ error: 'No text provided for QR code' });
        }

        // Get the image URL
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${image.filename}`;
    

        // Generate QR code URL
        const qrCodeUrl = await qr.toDataURL(text);

        // Save the QR code and image URL to MongoDB
        const newQrCode = new QrCode({ imageUrl, qrCodeUrl }); // Save both image and QR code URLs
        await newQrCode.save();

        res.status(201).json({ message: 'QR code generated successfully', imageUrl, qrCodeUrl });
        console.log('Image URL:', imageUrl);

    } catch (err) {
        res.status(500).json({ error: 'Error generating QR code' });
    }
});

module.exports = router;
