const express = require('express');
const app =  express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./controller/qrController");
const imageRoutes = require('./controller/QrImageController');

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/qr_code",({
})).then(()=>{
    console.log("mongodb connected");
}).catch((e)=>{
    console.log("not connected",e);
});

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));


app.use('/QrCode', routes);
app.use('/QrCode/image', imageRoutes);

app.listen(PORT, ()=>{
    console.log(`port is connected ${PORT}`);
});
