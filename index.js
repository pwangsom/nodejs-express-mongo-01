require('log-timestamp');
require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Common Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var logger = function TimestampLog(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.use(logger);

// Import Routes
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

const productsRoute = require('./routes/products');
const e = require('express');
app.use('/products', productsRoute);

// Routes
app.get('/', function (req, res){
    res.send('Hello World => Node.js with Express Server');
});

// DB Connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Mongo DB is connected successfully')
);

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
