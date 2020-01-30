const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*'); //access and domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE' ); //specify the methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use((error, req, res, next) =>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message});
});
mongoose.connect('mongodb+srv://matt:ppULHJfdq6MjHqcV@cluster0-inhjh.mongodb.net/rest')
    .then(result => {
        app.listen(8080);
    })
    .catch(err => console.log(err));