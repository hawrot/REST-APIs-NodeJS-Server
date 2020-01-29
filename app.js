const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*'); //access and domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE' ); //specify the methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
mongoose.connect('mongodb+srv://matt:ppULHJfdq6MjHqcV@cluster0-inhjh.mongodb.net/rest')
    .then(result => {
        app.listen(8080);
    })
    .catch(err => console.log(err));